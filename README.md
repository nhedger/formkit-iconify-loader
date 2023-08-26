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

Use the `createIconifyLoader` function to create a FormKit Icon Loader. This function
accepts an Iconify JSON object and returns a FormKit Icon Loader. In the following snippet, we're using the Heroicons icons set.

```ts
import { icons } from "@iconify-json/heroicons";
import { DefaultConfigOptions } from "@formkit/vue";

export const config = {
	iconLoader: createIconifyLoader(icons),
} satisfies DefaultConfigOptions;
```

## License

Copyright © 2023, [Nicolas Hedger](https://github.com/nhedger). Released under the [MIT License](LICENSE.md).
