# react-icons-material-design

[![npm version](https://img.shields.io/npm/v/react-icons-material-design.svg)](https://www.npmjs.com/package/react-icons-material-design)
[![npm downloads](https://img.shields.io/npm/dm/react-icons-material-design.svg)](https://www.npmjs.com/package/react-icons-material-design)

A library of React components for [Material Design Icons](https://github.com/google/material-design-icons) are created by Google.

Note: I forked from [tabler-icons-react](https://github.com/konradkalemba/tabler-icons-react) and modify a little to make this library. Thanks @konradkalemba about his work.

## Usage

The package is available via npm and can be installed using `npm` or `yarn`:

```sh
# npm
npm install react-icons-material-design

# yarn
yarn add react-icons-material-design
```

After installing the package you can import React Material Icons as React components as follows:

```jsx
import {
  icLocationCityFilled,
  icLocationCityOutlined,
  icLocationCityRound,
  icLocationCitySharp,
  icLocationCityTwoTone,
} from 'react-icons-material-design';
```

## Example

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

## Styling

SVGs can be styled using CSS.
- Icons already set `width="1em" height="1em"` allows changing size via `font-size`.
- Icons icons already set `fill=currentColor` allows changing color via `color`.


## License

This project is MIT licensed.
