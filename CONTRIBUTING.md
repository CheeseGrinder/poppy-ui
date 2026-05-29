# Contributing

Thanks for your interest in contributing to Poppy UI! 🎉

This document outlines how to contribute to the **Vue 3 library** version of Poppy UI. Note that this project has been streamlined to focus **exclusively on Vue**, using **Bun** as the runtime and package manager, and **Vite** for bundling.

- [Contributing Etiquette](#contributing-etiquette)
- [Creating an Issue](#creating-an-issue)
- [Using VS Code on Windows](#using-vs-code-on-windows)
- [Creating a Pull Request](#creating-a-pull-request)
  * [Requirements](#requirements)
  * [Setup](#setup)
  * [Modifying Components](#modifying-components)
  * [Preview Changes](#preview-changes)
  * [Lint & Format Changes](#lint--format-changes)
  * [Type Checking](#type-checking)
  * [Building Changes](#building-changes)
  * [Submit Pull Request](#submit-pull-request)
- [Commit Message Guidelines](#commit-message-guidelines)
- [License](#license)

---

## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://github.com/CheeseGrinder/poppy-ui/blob/main/CODE_OF_CONDUCT.md) for information on our rules of conduct.

---

## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into.
* The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.
* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs: reply" and receives no further replies from the author of the issue for more than 14 days, it will be closed.
* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/CheeseGrinder/poppy-ui/issues?utf8=%E2%9C%93&q=is%3Aissue).
* Next, [create a new issue](https://github.com/CheeseGrinder/poppy-ui/issues/new/choose) that thoroughly explains the problem.

---

## Using VS Code on Windows

To contribute on Windows, configure your environment to use Unix line endings (LF):

- In VS Code: Settings -> Text Editor -> Files -> Eol -> Set to `\n`
- Or add to `.vscode/settings.json`:
  ```json
  { "files.eol": "\n" }
  ```
- Set Git config: `git config --global core.autocrlf false`
- If files are already cached as CRLF: `git rm --cached -r .` then `git reset --hard`

---

## Creating a Pull Request

### Requirements

1. PRs must reference an existing issue that describes the issue or feature being submitted.
2. PRs must include tests or visual proof covering the changed behavior.
3. PRs must follow the [commit message format](#commit-message-guidelines).

> **Note:** Look for issues with the [help wanted](https://github.com/CheeseGrinder/poppy-ui/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

---

### Setup

**Prerequisites:**
- Git
- [Bun](https://bun.sh/) (replaces npm/yarn/pnpm)

**Steps:**
```bash
# Clone your fork
git clone https://github.com/your-username/poppy-ui.git
cd poppy-ui

# Install dependencies with Bun
bun install
```

---

### Modifying Components

1. Components are located in `/src/components/` organized by category:
   - `actions/` (Button, Modal, etc.)
   - `display/` (Badge, Card, etc.)
   - `feedback/` (Alert, Toast, etc.)
   - `layout/` (Divider, Stack, etc.)
   - `navigation/` (Breadcrumb, Menu, etc.)

2. Each component follows a **modular structure**:
   ```
src/components/[category]/[component]/
   ├── [Component].vue          # Main component
   ├── [component].props.ts     # Props interface
   ├── [component].types.ts     # Custom types
   ├── [component].context.ts   # Configuration key
   └── [Component].story.vue    # Histoire stories
   ```

3. Make your changes and ensure they follow the existing patterns.

---

### Preview Changes

Run the **Histoire** development server:
```bash
bun story:dev
```

This will start a local server (typically at `http://localhost:6006`) where you can:
- Preview component stories
- Test variations
- Develop new features in isolation

For production-like testing:
```bash
bun dev
```

---

### Lint & Format Changes

Poppy UI uses **[Biome](https://biomejs.dev/)** for linting and formatting:

```bash
# Format all files
bun format

# Check formatting without fixing
bun format:check

# Lint all files
bun lint

# Check lint without fixing
bun lint:check
```

**Note:** Biome replaces ESLint, Prettier, and other tooling with a single, fast configuration.

---

### Type Checking

Verify TypeScript types with:
```bash
bun typecheck
```

---

### Building Changes

To build the library for production:
```bash
bun run build
```

This will:
1. Run type checking with `vue-tsc`
2. Bundle the library with Vite
3. Generate type declarations

The built files will be output to `/dist`.

---

### Submit Pull Request

1. [Create a new pull request](https://github.com/CheeseGrinder/poppy-ui/compare) with `main` as the base.
2. Use `compare across forks` if your changes are in a fork.
3. Fill out the Pull Request template completely.
4. Ensure all CI checks pass (lint, typecheck, build).

---

## Commit Message Guidelines

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/).

### Commit Message Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** (type + scope + subject) is mandatory.

---

### Type

Must be one of:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect code meaning (formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to build process or auxiliary tools

---

### Scope

The scope refers to the component or package modified. Examples:
- `feat(button)`: Added a new button variant
- `fix(card)`: Fixed card padding issue
- `docs(readme)`: Updated installation instructions
- `chore(vite)`: Updated Vite configuration

---

### Subject

- Use imperative, present tense: "change" not "changed" or "changes"
- Do not capitalize first letter
- Do not place a period at the end
- Keep under 50 characters
- Describe what the commit does, not what issue it relates to

---

### Body

- Use imperative, present tense
- Include motivation for the change
- Contrast with previous behavior

---

### Footer

- Reference GitHub issues: `closes #123` or `fixes #123`
- Include breaking changes with `BREAKING CHANGE:` prefix

---

### Examples

```
feat(button): add loading state

Adds a loading prop to Button component that displays
a spinner and disables interactions.

closes #42
```

```
fix(card): correct padding on mobile

Fixes incorrect padding values on small screens
by adjusting Tailwind breakpoints.
```

```
refactor(components): migrate to Bun

Migrates all build scripts from npm to Bun for faster builds.

BREAKING CHANGE: Requires Bun 1.0+ instead of npm
```

---

## License

By contributing your code to the CheeseGrinder/poppy-ui GitHub Repository, you agree to license your contribution under the MIT license.
