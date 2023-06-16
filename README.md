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
  IconLocationCityFilled,
  IconLocationCityOutlined,
  IconLocationCityRound,
  IconLocationCitySharp,
  IconLocationCityTwoTone,
} from 'react-icons-material-design';
```

## Examples

1. Basic usage:

```jsx
import React from 'react';
import { IconLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <IconLocationCityFilled color='red' size={24} />
    </div>
  );
}
```

2. Usage with a custom component:

```jsx
import React from 'react';
import { IconLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <YourIconComponent icon={IconLocationCityFilled} />
      <YourIconComponent icon={<IconLocationCityFilled />} />
      <YourIconComponent icon={<IconLocationCityFilled size={24} color='red' />} />
    </div>
  );
}
```

## Styling

#### You can pass additional props to adjust the icon.

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _Number_,_String_ | '1em'           |
| `color`       | _String_ | currentColor |


```jsx
import React from 'react';
import { IconLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <IconLocationCityFilled color='red' size={24} />
    </div>
  );
}
```

#### We can also style using CSS:

- Icons are already set with `width="1em" height="1em"` allowing you to change the size via `font-size`.
- Icons are already set with `fill=currentColor` allowing you to change the color via `color`.

CSS
```
import React from 'react';
import { IconLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <IconLocationCityFilled style={{ fontSize: '2em', color: 'green' }} />
    </div>
  );
}
```

TailwindCSS

```
import React from 'react';
import { IconLocationCityFilled } from 'react-icons-material-design';

export default function Example() {
  return (
    <div>
      <IconLocationCityFilled className="text-3xl text-green-700" />
    </div>
  );
}
```

## License

This project is licensed under the MIT License.
