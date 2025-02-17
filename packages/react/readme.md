<p align="center">
  <a href="#">
    <img alt="Poppy" src="https://github.com/CheeseGrinder/poppy-ui/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Poppy UI - React
</h1>

Poppy UI integration for React apps.

## Install
```sh
npm install @poppy-ui/react
```
*if the command fails, check the section [how to use](../../readme.md#how-to-use) in the root readme*

## Configuration
The configuration is minimal and easy
The configuration is minimal and easy
```tsx
// main.ts
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import poppyReact from '@poppy-ui/react';
import '@poppy-ui/react/css/core.css';
import '@poppy-ui/react/css/themes/light.always.css';

poppyReact();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

And your done, happy coding 🎉

## Contributing

See our [Contributing Guide](https://github.com/CheeseGrinder/poppy-ui/blob/main/docs/CONTRIBUTING.md).
