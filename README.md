
<p align="center">
  <a href="#">
    <img alt="Poppy" src="https://github.com/CheeseGrinder/poppy-ui/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Poppy UI
</h1>

<p align="center">
  Poppy UI is an open-source Design System and Component Library exclusively built for modern <b>VueJS</b> applications.
</p>

<p align="center">
  Powered by <a href="https://vuejs.org/">Vue 3</a>, <a href="https://tailwindcss.com/">Tailwind CSS 4</a>, and <a href="https://daisyui.com/">DaisyUI 5</a>, Poppy UI provides top-quality, highly customizable, and accessible components to speed up your web development workflow. We use <a href="https://histoire.dev/">Histoire</a> for component storyboarding and documentation.
</p>

<p align="center">
  <a href="https://github.com/CheeseGrinder/poppy-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Released under the MIT license." />
  </a>
  <a href="https://github.com/CheeseGrinder/poppy-ui/blob/main/docs/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

---

## 💡 Context & Tech Stack

Poppy UI is designed as a streamlined, Vue-native component library. By moving away from cross-framework wrappers, we ensure a better Developer Experience (DX), maximum performance, and deep integration with the Vue ecosystem.

### Built With
* **[VueJS (> 3.5)](https://vuejs.org/):** Leveraging the latest Composition API and reactivity features.
* **[Tailwind CSS 4](https://tailwindcss.com/):** For utility-first, highly performant styling.
* **[DaisyUI 5](https://daisyui.com/):** Providing beautiful, semantic baseline styles for our Tailwind components.
* **[Histoire](https://histoire.dev/):** A native Vue alternative to Storybook for building and documenting component stories.
* **[Bun](https://bun.sh/):** Used as the fast all-in-one JavaScript runtime, package manager, and bundler.

## 📦 Installation

To use Poppy UI in your Vue project, you can install the package via bun (make sure you have Tailwind CSS and DaisyUI configured in your project):

```sh
bun add @poppy-ui/vue
```

> **Note:** Comprehensive documentation on how to configure Tailwind and DaisyUI with Poppy UI can be found in our [Documentation (WIP)](https://www.google.com/search?q=%23).

## 🛠️ Getting Started for Development

If you want to contribute to the project or run it locally, follow these steps:

### Requirements

* Git
* [Bun](https://www.google.com/url?sa=E&source=gmail&q=https://bun.sh/) Installed

### Clone the repository

```sh
git clone https://github.com/CheeseGrinder/poppy-ui.git
cd poppy-ui
```

### Install dependencies

```sh
bun install
```

### Development (Histoire)

To start the component playground and view stories locally:

```sh
bun run story:dev
```

*This will start the Histoire server, allowing you to browse components, test variations, and develop new features in an isolated environment.*

### Build for Production

To build the library for publishing:

```sh
bun run build
```

---

## 📚 Documentation

Start building your next project by following our [documentation]().
We would love to hear from you! If you have any feedback or run into issues using our library, please file an [issue]() on this repository.

## 🤝 Contributing

Thanks for your interest in contributing! Read up on our guidelines for [contributing]() and then look through our issues with a [help wanted]() label.

Please note that this project is released with a [Contributor Code of Conduct](). By participating in this project you agree to abide by its terms.
