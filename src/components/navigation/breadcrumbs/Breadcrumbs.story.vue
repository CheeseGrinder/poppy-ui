<script lang="ts">
import { FilePlus, FolderOpen, Home } from '@lucide/vue'
import { reactive } from 'vue'
import Breadcrumbs from './Breadcrumbs.vue'
import type { BreadcrumbsProps } from './breadcrumbs.props'
</script>

<script setup lang="ts">
const state = reactive<BreadcrumbsProps>({
  items: [
    { label: 'Home', to: '#' },
    { label: 'Documents', to: '#' },
    { label: 'Add Document' },
  ],
  maxWidth: undefined,
})
</script>

<template>
  <Story group="components" title="Navigation/Breadcrumbs" auto-props-disabled>

    <Variant title="Default">
      <template #controls>
        <HstSelect
          v-model="state.maxWidth"
          title="Max Width"
          :options="[
            { label: '-- none --', value: undefined },
            'max-w-xs',
            'max-w-sm',
            'max-w-md',
          ]"
        />
      </template>
      <Breadcrumbs v-bind="state" />
    </Variant>

    <Variant title="With icons">
      <Breadcrumbs
        :items="[
          { label: 'Home', to: '#', icon: Home },
          { label: 'Documents', to: '#', icon: FolderOpen },
          { label: 'Add Document', icon: FilePlus },
        ]"
      />
    </Variant>

    <Variant title="With max-width (scroll)">
      <Breadcrumbs
        max-width="max-w-xs"
        :items="[
          { label: 'Long text 1', to: '#'},
          { label: 'Long text 2', to: '#' },
          { label: 'Long text 3', to: '#' },
          { label: 'Long text 4', to: '#' },
          { label: 'Long text 5' },
        ]"
      />
    </Variant>

  </Story>
</template>

<docs lang="md">
# Breadcrumbs

## Description
Affiche un fil d'Ariane pour aider les utilisateurs à naviguer dans le site.
Le dernier item est automatiquement traité comme la page courante (non cliquable).

## Props
| Prop       | Type               | Default     | Required | Configurable | Description                                     |
|------------|--------------------|-------------|----------|--------------|-------------------------------------------------|
| `items`    | `BreadcrumbItem[]` | —           | ✅       | ❌          | Liste des items du fil d'Ariane                 |
| `maxWidth` | `string`           | `undefined` | ❌       | ✅          | Classe Tailwind de largeur max (ex: `max-w-xs`) |

## Type `BreadcrumbItem`
| Prop    | Type               | Description                                   |
|---------|--------------------|-----------------------------------------------|
| `label` | `string`           | Texte affiché                                 |
| `to`    | `RouteLocationRaw` | Route Vue Router. Absent = item non cliquable |
| `icon`  | `Component`        | SVG inline optionnel                          |

## Usage
```vue
<Breadcrumbs
  :items="[
    { label: 'Home', to: '/' },
    { label: 'Documents', to: { name: 'documents' } },
    { label: 'Add Document' },
  ]"
/>
```
</docs>