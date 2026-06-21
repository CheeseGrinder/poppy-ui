/**
 * Generates llms.txt and llms-full.txt from Histoire story docs blocks.
 *
 * Each *.story.vue file contains a <docs lang="md"> block with the full API
 * reference for that component. This script extracts those blocks and assembles
 * them into two AI-readable files at the project root.
 *
 *   llms.txt      — brief index: installation + one-line description per component
 *   llms-full.txt — complete API reference for every component
 *
 * Usage: bun run scripts/generate-llms.ts
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const COMPONENTS_DIR = join(ROOT, 'src/components')
const CONFIG_STORY = join(ROOT, 'src/stories/Configuration.story.md')

interface ComponentDoc {
  category: string
  name: string
  description: string
  fullDoc: string
}

// ── Parsers ──────────────────────────────────────────────────────────────────

function extractStoryTitle(content: string): string | null {
  // Match <Story ... title="Category/Name" ...>
  const match = content.match(/<Story[^>]*\stitle="([^"]+)"/)
  return match ? match[1] : null
}

function extractDocsBlock(content: string): string | null {
  const match = content.match(/<docs lang="md">([\s\S]*?)<\/docs>/)
  return match ? match[1].trim() : null
}

function extractDescription(docs: string): string {
  const match = docs.match(/## Description\n+([\s\S]*?)(?=\n## |\n### |$)/)
  if (!match) return ''
  // Join all lines of the first paragraph (stop at blank line)
  const paragraph = match[1].trim().split('\n\n')[0].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  return paragraph
}

// ── File discovery ───────────────────────────────────────────────────────────

async function findStoryFiles(dir: string): Promise<string[]> {
  const results: string[] = []

  async function walk(current: string) {
    const entries = await readdir(current, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(current, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath)
      } else if (entry.isFile() && entry.name.endsWith('.story.vue')) {
        results.push(fullPath)
      }
    }
  }

  await walk(dir)
  return results.sort()
}

// ── Content builders ─────────────────────────────────────────────────────────

const HEADER = `\
# Poppy UI

> Poppy UI is an open-source Vue 3 component library built on Tailwind CSS 4 and DaisyUI 5.
> Package: \`@poppy-ui/vue\` — GitHub: https://github.com/CheeseGrinder/poppy-ui

## Installation

\`\`\`sh
bun add @poppy-ui/vue
# or: npm install @poppy-ui/vue
\`\`\`

## Quick setup

\`\`\`ts
// main.ts
import { createApp } from 'vue'
import { PoppyUi } from '@poppy-ui/vue'
import '@poppy-ui/vue/style.css'
import App from './App.vue'

createApp(App)
  .use(PoppyUi, {
    // optional global defaults
  })
  .mount('#app')
\`\`\`

`

function buildBriefIndex(byCategory: Map<string, ComponentDoc[]>, configDoc: string): string {
  let out = HEADER

  out += `## Plugin configuration\n\n`
  // Skip H1 and first H2 heading, grab the opening paragraph
  const configDesc = configDoc
    .replace(/^# .+\n+/, '') // strip H1
    .replace(/^## .+\n+/, '') // strip first H2
    .split('\n\n')[0]
    .replace(/\n/g, ' ')
    .trim()
  out += `${configDesc}\n\nFull config reference: see \`llms-full.txt\`.\n\n`

  out += `## Components\n\n`

  for (const [category, components] of byCategory) {
    out += `### ${category} (${components.length})\n\n`
    for (const c of components) {
      out += `- **${c.name}** — ${c.description}\n`
    }
    out += '\n'
  }

  out += `## Full API reference\n\nSee \`llms-full.txt\` for complete props, events, slots, and usage examples.\n`

  return out
}

function buildFullReference(byCategory: Map<string, ComponentDoc[]>, configDoc: string): string {
  let out = HEADER

  out += `---\n\n`
  out += `## Plugin configuration\n\n`
  // Strip the H1 from config doc
  out += configDoc.replace(/^# .+\n/, '').trim()
  out += '\n\n---\n\n'

  out += `## Component API reference\n\n`

  for (const [category, components] of byCategory) {
    out += `---\n\n`
    out += `# ${category}\n\n`
    for (const c of components) {
      out += `${c.fullDoc}\n\n`
    }
  }

  return out
}

// ── Main ─────────────────────────────────────────────────────────────────────

const storyFiles = await findStoryFiles(COMPONENTS_DIR)
const docs: ComponentDoc[] = []

for (const file of storyFiles) {
  const raw = await readFile(file, 'utf-8')
  const content = raw.replace(/\r\n/g, '\n')
  const title = extractStoryTitle(content)
  const docsBlock = extractDocsBlock(content)

  if (!title || !docsBlock) {
    console.warn(`  ⚠ skipped ${relative(ROOT, file)} (missing title or docs block)`)
    continue
  }

  const slashIndex = title.indexOf('/')
  const category = slashIndex !== -1 ? title.slice(0, slashIndex) : 'Other'
  const name = slashIndex !== -1 ? title.slice(slashIndex + 1) : title
  const description = extractDescription(docsBlock)

  docs.push({ category, name, description, fullDoc: docsBlock })
}

// Group by category, preserving insertion order
const byCategory = new Map<string, ComponentDoc[]>()
for (const doc of docs) {
  if (!byCategory.has(doc.category)) byCategory.set(doc.category, [])
  const bucket = byCategory.get(doc.category)
  if (bucket) bucket.push(doc)
}

// Plugin configuration doc
const configRaw = await readFile(CONFIG_STORY, 'utf-8')
const configDoc = configRaw
  .replace(/\r\n/g, '\n')
  .replace(/^---[\s\S]*?---\n/, '')
  .trim()

const brief = buildBriefIndex(byCategory, configDoc)
const full = buildFullReference(byCategory, configDoc)

await writeFile(join(ROOT, 'llms.txt'), brief, 'utf-8')
await writeFile(join(ROOT, 'llms-full.txt'), full, 'utf-8')

const totalComponents = docs.length
console.log(`✓ llms.txt       — ${brief.length.toLocaleString()} chars, ${totalComponents} components`)
console.log(`✓ llms-full.txt  — ${full.length.toLocaleString()} chars, ${totalComponents} components`)
console.log(`  categories: ${[...byCategory.keys()].join(', ')}`)
