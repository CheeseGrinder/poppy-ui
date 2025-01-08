<p align="center">
  <a href="#">
    <img alt="Poppy" src="https://github.com/CheeseGrinder/poppy-ui/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Poppy UI
</h1>

<p align="center">
  Poppy is an open source app development toolkit for building modern, fast, top-quality cross-platform native and Progressive Web Apps from a single codebase with JavaScript and the Web.
</p>

<p align="center">
  Poppy is based on <a href="https://www.webcomponents.org/introduction">Web Components</a> and <a href="https://daisyui.com/">Daisy UI</a>, which enables significant performance, usability, and feature improvements alongside support for popular web frameworks like <a href="https://angular.io/">Angular</a>, <a href="https://reactjs.com/">React</a>, and <a href="https://vuejs.org/">Vue</a>.
</p>

<p align="center">
  <a href="https://github.com/CheeseGrinder/poppy-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Ionic Framework is released under the MIT license." />
  </a>
  <a href="https://github.com/CheeseGrinder/poppy-ui/blob/main/docs/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

<!-- <h2 align="center">
  <a href="https://github.com/CheeseGrinder/poppy-ui/blob/main/docs/CONTRIBUTING.md">Contribute</a>
</h2> -->

### Packages

| Project | Package | Version | Downloads| Links |
| ------- | ------- | ------- | -------- |:-----:|
| **Core**    | [`@poppy-ui/core`][poppy-ui-core-npm]       | [![version][poppy-ui-core-version]][poppy-ui-core-npm]       | [![version][poppy-ui-core-download]][poppy-ui-core-npm]    | [`README.md`][poppy-ui-core-readme]
| **Vue**     | [`@poppy-ui/vue`][poppy-ui-vue-npm]         | [![version][poppy-ui-vue-version]][poppy-ui-vue-npm]         | [![version][poppy-ui-vue-download]][poppy-ui-core-npm]     | [`README.md`][poppy-ui-vue-readme]
| **React**   | [`@poppy-ui/react`][poppy-ui-react-npm]     | [![version][poppy-ui-react-version]][poppy-ui-react-npm]     | [![version][poppy-ui-react-download]][poppy-ui-core-npm]   | [`README.md`][poppy-ui-react-readme]
| **Angular** | [`@poppy-ui/angular`][poppy-ui-angular-npm] | [![version][poppy-ui-angular-version]][poppy-ui-angular-npm] | [![version][poppy-ui-angular-download]][poppy-ui-core-npm] | [`README.md`][poppy-ui-angular-readme]

## Context
### Framework
Poppy-ui use Stencil, which is a compiler that generates Web Components (more specifically, Custom Elements).
Stencil combines the best concepts of the most popular frameworks into a simple build-time tool.

Stencil was choosen for the following reasons:
- it's the only one to have a wrapper for Angular, React and Vue. 
- easy-to-understand
- good developer experience
- reactive community

### Packages description
| Package | Description |
| :------ | :---------- |
| Core    | It contains components such as buttons, dropdown lists and their styles. |
| Vue     | The Vue package is a wrapper for the core package. It provides the core package in the form of Vue components. |
| Angular | The Angular package is a wrapper for the core package. It provides the core package in the form of Angular components. |
| React   | The React package is a wrapper for the core package. It provides the core package in the form of React components. |

### Repository
The poppy-ui repository is a [monorepo][monorepo-link].
A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.

In many projects, when a monorepo is created, they use NX, turborepo or something else.
Here, We chose to use [npm workspace][npm-workspace-link] to avoid having too many dependencies and keep the project as small as possible.

## How to use
If you want to use **Poppy-UI** on a framework, checkout the dedicated readme documentation below:

- [vue][poppy-ui-vue-readme] 🏗️ WIP 🏗️
- [angular][poppy-ui-angular-readme] 🏗️ WIP 🏗️
- [react][poppy-ui-react-readme] 🏗️ WIP 🏗️


## Getting Started for development
### Requirements
- Git
- Node: `20` or higher
- npm: `10` or higher
- Read the [stencil official documentation][stencil-doc-link]

### Clone the repository
```sh
git clone https://github.com/CheeseGrinder/poppy-ui.git
```

### Install
Step into the directory where you just cloned `poppy-ui` and run:
```sh
npm install
```
*It installs the dependencies for the `core`, `angular`, `react` and `vue` packages in one node_module in root directory.*

### Development
```sh
npm start --workspace @poppy-ui/core
# or
npm run core:start
```
*It starts the core package in development mode. For more information on developing a new feature or fixing a bug, see readme [core][poppy-ui-core-readme].*

### Build
```sh
npm run build --workspace @poppy-ui/core
# or
npm run core:build
```
*It builds the core so that the generated assets can be used by the Angular, React and Vue packages.*


### Getting Started

Start a new project by following our [documentation](https://poppy-ui.com/docs/).
We would love to hear from you! If you have any feedback or run into issues using our framework, please file
an [issue](https://github.com/CheeseGrinder/poppy-ui/issues/new) on this repository.

### Contributing

Thanks for your interest in contributing! Read up on our guidelines for
[contributing](https://github.com/CheeseGrinder/poppy-ui/blob/main/CONTRIBUTING.md)
and then look through our issues with a [help wanted](https://github.com/CheeseGrinder/poppy-ui/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)
label.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/CheeseGrinder/poppy-ui/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.


<!-- Links section -->
[web-component-link]: https://www.webcomponents.org/introduction
[graphic-chart-link]: https://drive.google.com/file/d/1rsaf98TVkOxvawB78F9iauVGrS8NAjqe/view?usp=sharing
[monorepo-link]: https://monorepo.tools/#what-is-a-monorepo
[npm-workspace-link]: https://docs.npmjs.com/cli/v7/using-npm/workspaces
[stencil-link]: https://stenciljs.com
[stencil-doc-link]: https://stenciljs.com/docs/introduction

<!-- Core links -->
[poppy-ui-core-npm]: https://www.npmjs.com/package/@poppy-ui/core
[poppy-ui-core-version]: https://img.shields.io/npm/v/@poppy-ui/core/latest.svg
[poppy-ui-core-download]: https://img.shields.io/npm/dm/@poppy-ui/core.svg
[poppy-ui-core-readme]: packages/core/readme.md

<!-- Angular links -->
[angular-link]: https://angular.io/
[poppy-ui-angular-npm]: https://www.npmjs.com/package/@poppy-ui/angular
[poppy-ui-angular-version]: https://img.shields.io/npm/v/@poppy-ui/angular/latest.svg
[poppy-ui-angular-download]: https://img.shields.io/npm/dm/@poppy-ui/angular.svg
[poppy-ui-angular-readme]: packages/angular/readme.md

<!-- React links -->
[react-link]: https://reactjs.com/
[poppy-ui-react-npm]: https://www.npmjs.com/package/@poppy-ui/react
[poppy-ui-react-version]: https://img.shields.io/npm/v/@poppy-ui/react/latest.svg
[poppy-ui-react-download]: https://img.shields.io/npm/dm/@poppy-ui/react.svg
[poppy-ui-react-readme]: packages/react/readme.md

<!-- Vue links-->
[vue-link]: https://vuejs.org/
[poppy-ui-vue-npm]: https://www.npmjs.com/package/@poppy-ui/vue
[poppy-ui-vue-version]: https://img.shields.io/npm/v/@poppy-ui/vue/latest.svg
[poppy-ui-vue-download]: https://img.shields.io/npm/dm/@poppy-ui/vue.svg
[poppy-ui-vue-readme]: packages/vue/readme.md
