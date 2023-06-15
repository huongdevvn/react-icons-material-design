# react-icons-material-design

[![npm version](https://img.shields.io/npm/v/react-icons-material-design.svg)](https://www.npmjs.com/package/react-icons-material-design)
[![npm downloads](https://img.shields.io/npm/dm/react-icons-material-design.svg)](https://www.npmjs.com/package/react-icons-material-design)

A library of React components for Material Design Icons created by Google. This library is a fork of [tabler-icons-react](https://github.com/konradkalemba/tabler-icons-react) with some modifications. Special thanks to @konradkalemba for his work.

## Features

- Zero dependencies.
- TypeScript friendly.
- 3000+ icons with variants: Filled, Outlined, Round, Sharp, TwoTone. You can explore and choose your icons at [Material Design Icons](https://marella.me/material-design-icons/demo/svg).
- SVGs optimized with SVGO.
- Easy to import using named exports.
- Tree-shakeable verified by [agadoo](https://github.com/Rich-Harris/agadoo).

## Installation

The package is available via npm and can be installed using `npm` or `yarn`:

```sh
# npm
npm install react-icons-material-design

# yarn
yarn add react-icons-material-design
```

## Usage

After installing the package, you can import React Material Icons as React components:

```jsx
import {
  icLocationCityFilled,
  icLocationCityOutlined,
  icLocationCityRound,
  icLocationCitySharp,
  icLocationCityTwoTone,
} from 'react-icons-material-design';
```

## Examples

1. Basic usage:

```jsx
import React from 'react';
import { icLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <icLocationCityFilled />
    </div>
  );
}
```

2. Usage with a custom component:

```jsx
import React from 'react';
import { icLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <YourIconComponent icon={icLocationCityFilled} />
    </div>
  );
}
```

## Styling

SVGs can be styled using CSS:

- Icons are already set with `width="1em" height="1em"` allowing you to change the size via `font-size`.
- Icons are already set with `fill=currentColor` allowing you to change the color via `color`.

## License

This project is licensed under the MIT License.
