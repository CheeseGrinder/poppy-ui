import * as d from '@stencil/core/internal';
import path, { dirname } from 'path';
import ts from 'typescript';
/**
 * Find all referenced types by a component and add them to the `importDataObj` parameter
 * @param importDataObj an output parameter that contains the imported types seen thus far by the compiler
 * @param typeCounts a map of seen types and the number of times the type has been seen
 * @param cmp the metadata associated with the component whose types are being inspected
 * @param filePath the path of the component file
 * @param config The Stencil config for the project
 * @returns the updated import data
 */
export const updateReferenceTypeImports = (
  importDataObj: d.TypesImportData,
  typeCounts: Map<string, number>,
  cmp: d.ComponentCompilerMeta,
  filePath: string,
  config: d.ValidatedConfig,
): d.TypesImportData => {
  const updateImportReferences = updateImportReferenceFactory(typeCounts, filePath, config);

  return cmp.properties
    .filter(prop => prop.docs.tags.some(tag => tag.name === 'config'))
    .filter(prop => prop.complexType?.references)
    .reduce((typesImportData: d.TypesImportData, cmpProp) => (
      updateImportReferences(typesImportData, cmpProp.complexType.references)
    ), importDataObj);
};

/**
 * Describes a function that updates type import references for a file
 * @param existingTypeImportData locally/imported/globally used type names. This data structure keeps track of the name
 * of the type that is used in a file, and an alias that Stencil may have generated for the name to avoid collisions.
 * @param typesReferences type references from a single file
 * @returns updated type import data
 */
type ImportReferenceUpdater = (
  existingTypeImportData: d.TypesImportData,
  typeReferences: { [key: string]: d.ComponentCompilerTypeReference },
) => d.TypesImportData;


/**
 * Factory function to create an `ImportReferenceUpdater` instance
 * @param typeCounts a key-value store of seen type names and the number of times the type name has been seen
 * @param filePath the path of the file containing the component whose imports are being inspected
 * @param config The Stencil config for the project
 * @returns an `ImportReferenceUpdater` instance for updating import references in the provided `filePath`
 */
const updateImportReferenceFactory = (
  typeCounts: Map<string, number>,
  filePath: string,
  config: d.ValidatedConfig,
): ImportReferenceUpdater => {
  /**
   * Determines the number of times that a type identifier (name) has been used. If an identifier has been used before,
   * append the number of times the identifier has been seen to its name to avoid future naming collisions
   * @param name the identifier name to check for previous usages
   * @returns the identifier name, potentially with an integer appended to its name if it has been seen before.
   */
  function getIncrementTypeName(name: string): string {
    const counter = typeCounts.get(name);
    if (counter === undefined) {
      typeCounts.set(name, 1);
      return name;
    }
    typeCounts.set(name, counter + 1);
    return `${name}${counter}`;
  }

  return (
    existingTypeImportData: d.TypesImportData,
    typeReferences: { [key: string]: d.ComponentCompilerTypeReference },
  ): d.TypesImportData => {
    Object.keys(typeReferences)
      .map<[string, d.ComponentCompilerTypeReference]>((typeName) => {
        return [typeName, typeReferences[typeName]];
      })
      .forEach(([typeName, typeReference]) => {
        let importResolvedFile: string;

        // If global then there is no import statement needed
        if (typeReference.location === 'global') {
          return;

          // If local then import location is the current file
        } else if (typeReference.location === 'local') {
          importResolvedFile = filePath;
        } else {
          importResolvedFile = typeReference.path!;

          // We only care to resolve any _potential_ aliased
          // modules if we're not already certain the path isn't an alias.
          // We also don't want to transform aliases unless the user has enabled the behavior
          // in their Stencil config
          if (config.transformAliasedImportPaths && !importResolvedFile.startsWith('.')) {
            const { resolvedModule } = ts.resolveModuleName(
              typeReference.path!,
              filePath,
              config.tsCompilerOptions,
              ts.createCompilerHost(config.tsCompilerOptions),
            );

            if (resolvedModule && !resolvedModule.isExternalLibraryImport && resolvedModule.resolvedFileName) {
              importResolvedFile = resolvedModule.resolvedFileName;
            }
          }
        }

        // If this is a relative path make it absolute
        if (importResolvedFile.startsWith('.')) {
          importResolvedFile = resolve(dirname(filePath), importResolvedFile);
        }
        existingTypeImportData[importResolvedFile] = existingTypeImportData[importResolvedFile] || [];

        // If this file already has a reference to this type move on
        if (existingTypeImportData[importResolvedFile].find((df) => df.localName === typeName)) {
          return;
        }

        const newTypeName = getIncrementTypeName(typeName);
        existingTypeImportData[importResolvedFile].push({
          localName: typeName,
          importName: newTypeName,
        });
      });

    return existingTypeImportData;
  };
};

/**
 * A wrapped version of node.js' {@link path.resolve} which adds our custom
 * normalization logic. This resolves a path to a given (relative or absolute)
 * path.
 *
 * @throws the underlying node function will throw if any argument is not a
 * string
 * @param paths a path or path fragments to resolve
 * @returns a resolved path!
 */
export function resolve(...paths: string[]): string {
  /**
   * When normalizing, we should _not_ attempt to relativize the path returned by the native Node `resolve` method. When
   * calculating the path from each of the string-based parts, Node does not prepend './' to the calculated path.
   */
  return normalizePath(path.resolve(...paths), false);
}


/**
 * Convert Windows backslash paths to slash paths: foo\\bar ➔ foo/bar
 * Forward-slash paths can be used in Windows as long as they're not
 * extended-length paths and don't contain any non-ascii characters.
 * This was created since the path methods in Node.js outputs \\ paths on Windows.
 * @param path the Windows-based path to convert
 * @param relativize whether or not a relative path should have `./` prepended
 * @returns the converted path
 */
export const normalizePath = (path: string, relativize = true): string => {
  if (typeof path !== 'string') {
    throw new Error(`invalid path to normalize`);
  }
  path = normalizeSlashes(path.trim());

  const components = pathComponents(path, getRootLength(path));
  const reducedComponents = reducePathComponents(components);
  const rootPart = reducedComponents[0];
  const secondPart = reducedComponents[1];
  const normalized = rootPart + reducedComponents.slice(1).join('/');

  if (normalized === '') {
    return '.';
  }
  if (
    rootPart === '' &&
    secondPart &&
    path.includes('/') &&
    !secondPart.startsWith('.') &&
    !secondPart.startsWith('@') &&
    relativize
  ) {
    return './' + normalized;
  }
  return normalized;
};

const getRootLength = (path: string) => {
  const rootLength = getEncodedRootLength(path);
  return rootLength < 0 ? ~rootLength : rootLength;
};

const getEncodedRootLength = (path: string): number => {
  if (!path) return 0;
  const ch0 = path.charCodeAt(0);

  // POSIX or UNC
  if (ch0 === CharacterCodes.slash || ch0 === CharacterCodes.backslash) {
    if (path.charCodeAt(1) !== ch0) return 1; // POSIX: "/" (or non-normalized "\")

    const p1 = path.indexOf(ch0 === CharacterCodes.slash ? '/' : altDirectorySeparator, 2);
    if (p1 < 0) return path.length; // UNC: "//server" or "\\server"

    return p1 + 1; // UNC: "//server/" or "\\server\"
  }

  // DOS
  if (isVolumeCharacter(ch0) && path.charCodeAt(1) === CharacterCodes.colon) {
    const ch2 = path.charCodeAt(2);
    if (ch2 === CharacterCodes.slash || ch2 === CharacterCodes.backslash) return 3; // DOS: "c:/" or "c:\"
    if (path.length === 2) return 2; // DOS: "c:" (but not "c:d")
  }

  // URL
  const schemeEnd = path.indexOf(urlSchemeSeparator);
  if (schemeEnd !== -1) {
    const authorityStart = schemeEnd + urlSchemeSeparator.length;
    const authorityEnd = path.indexOf('/', authorityStart);
    if (authorityEnd !== -1) {
      // URL: "file:///", "file://server/", "file://server/path"
      // For local "file" URLs, include the leading DOS volume (if present).
      // Per https://www.ietf.org/rfc/rfc1738.txt, a host of "" or "localhost" is a
      // special case interpreted as "the machine from which the URL is being interpreted".
      const scheme = path.slice(0, schemeEnd);
      const authority = path.slice(authorityStart, authorityEnd);
      if (
        scheme === 'file' &&
        (authority === '' || authority === 'localhost') &&
        isVolumeCharacter(path.charCodeAt(authorityEnd + 1))
      ) {
        const volumeSeparatorEnd = getFileUrlVolumeSeparatorEnd(path, authorityEnd + 2);
        if (volumeSeparatorEnd !== -1) {
          if (path.charCodeAt(volumeSeparatorEnd) === CharacterCodes.slash) {
            // URL: "file:///c:/", "file://localhost/c:/", "file:///c%3a/", "file://localhost/c%3a/"
            return ~(volumeSeparatorEnd + 1);
          }
          if (volumeSeparatorEnd === path.length) {
            // URL: "file:///c:", "file://localhost/c:", "file:///c$3a", "file://localhost/c%3a"
            // but not "file:///c:d" or "file:///c%3ad"
            return ~volumeSeparatorEnd;
          }
        }
      }
      return ~(authorityEnd + 1); // URL: "file://server/", "http://server/"
    }
    return ~path.length; // URL: "file://server", "http://server"
  }

  // relative
  return 0;
};

const enum CharacterCodes {
  a = 0x61,
  A = 0x41,
  z = 0x7a,
  Z = 0x5a,
  _3 = 0x33,

  backslash = 0x5c, // \
  colon = 0x3a, // :
  dot = 0x2e, // .
  percent = 0x25, // %
  slash = 0x2f, // /
}


const normalizeSlashes = (path: string) => path.replace(backslashRegExp, '/');

const altDirectorySeparator = '\\';
const urlSchemeSeparator = '://';
const backslashRegExp = /\\/g;


const isVolumeCharacter = (charCode: number) =>
  (charCode >= CharacterCodes.a && charCode <= CharacterCodes.z) ||
  (charCode >= CharacterCodes.A && charCode <= CharacterCodes.Z);

const getFileUrlVolumeSeparatorEnd = (url: string, start: number) => {
  const ch0 = url.charCodeAt(start);
  if (ch0 === CharacterCodes.colon) return start + 1;
  if (ch0 === CharacterCodes.percent && url.charCodeAt(start + 1) === CharacterCodes._3) {
    const ch2 = url.charCodeAt(start + 2);
    if (ch2 === CharacterCodes.a || ch2 === CharacterCodes.A) return start + 3;
  }
  return -1;
};

const reducePathComponents = (components: readonly string[]) => {
  if (!Array.isArray(components) || components.length === 0) {
    return [];
  }
  const reduced = [components[0]];
  for (let i = 1; i < components.length; i++) {
    const component = components[i];
    if (!component) continue;
    if (component === '.') continue;
    if (component === '..') {
      if (reduced.length > 1) {
        if (reduced[reduced.length - 1] !== '..') {
          reduced.pop();
          continue;
        }
      } else if (reduced[0]) continue;
    }
    reduced.push(component);
  }
  return reduced;
};

const pathComponents = (path: string, rootLength: number) => {
  const root = path.substring(0, rootLength);
  const rest = path.substring(rootLength).split('/');
  const restLen = rest.length;
  if (restLen > 0 && !rest[restLen - 1]) {
    rest.pop();
  }
  return [root, ...rest];
};

/**
 * A wrapped version of node.js' {@link path.relative} which adds our custom
 * normalization logic. This solves the relative path between `from` and `to`!
 *
 * The calculation of the returned path follows that of Node's logic, with one exception - if the calculated path
 * results in an empty string, a string of length one with a period (`'.'`) is returned.
 *
 * @throws the underlying node.js function can throw if either path is not a
 * string
 * @param from the path where relative resolution starts
 * @param to the destination path
 * @returns the resolved relative path
 */
export function relative(from: string, to: string): string {
  /**
   * When normalizing, we should _not_ attempt to relativize the path returned by the native Node `relative` method.
   * When finding the relative path between `from` and `to`, Node does not prepend './' to a non-zero length calculated
   * path. However, our algorithm does differ from that of Node's, as described in this function's JSDoc when a zero
   * length string is encountered.
   */
  return normalizePath(path.relative(from, to), false);
}

export const sortImportNames = (a: d.TypesMemberNameData, b: d.TypesMemberNameData) => {
  const aName = a.localName.toLowerCase();
  const bName = b.localName.toLowerCase();
  if (aName < bName) return -1;
  if (aName > bName) return 1;
  if (a.localName < b.localName) return -1;
  if (a.localName > b.localName) return 1;
  return 0;
};
