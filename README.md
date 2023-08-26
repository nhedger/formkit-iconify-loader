# FormKit Iconify Loader

This package providers a FormKit icon loader for Iconify.

## Installation

**FormKit Iconify Loader** can be installed with your favorite package manager.

```bash
# NPM
npm install @hedger/formkit-iconify-loader

# Yarn
yarn add @hedger/formkit-iconify-loader

# PNPM
pnpm add @hedger/formkit-iconify-loader
```

## Usage

Import the provided `createIconifyLoader` function in your FormKit configuration
file and use it to create a FormKit Icon Loader for your preferred Iconify icon
set.

The following example illustrates how to create a FormKit Icon Loader for the
Heroicons icon set.

```ts
import { icons } from "@iconify-json/heroicons";
import type { DefaultConfigOptions } from "@formkit/vue";
import { createIconifyLoader } from "@hedger/formkit-iconify-loader";

export const config = {
	iconLoader: createIconifyLoader(icons),
} satisfies DefaultConfigOptions;
```

You can now reference any icons from the Heroicons icon set in your FormKit
inputs, as prefix icons or suffix icons, for example. You can also use the
`FormKitIcon` component to render any icon from the Heroicons icon set.

```html
<template>
	<!-- On a FormKit input -->
	<FormKit type="email" prefix-icon="envelope" />

	<!-- Using the FormKitIcon component -->
	<FormKitIcon icon="envelope" />
</template>
```

## License

Copyright © 2023, [Nicolas Hedger](https://github.com/nhedger). Released under the [MIT License](LICENSE.md).
