# webpack

## Install

we use webpack5.

```bash
yarn add -D webpack webpack-cli
```

for dev, we use `webpack-dev-server`.

```bash
yarn add -D webpack-dev-server
```

Recommended webpack offcial site, separate webpack.config.\*.
so, we merge webpack config files through `webpack-merge`

```bash
yarn add -D webpack-merge
```

## CLI

For 2 separate config files, create two cli.

```bash
# dev
webpack serve --config webpack.dev.js

# build
webpack --config webpack.prod.js
```

`serve` means running `webpack-dev-server`.

`--config` means selecting file which indicating by parameter

## Config

### webpack.common.js

### webpack.dev.js

### webpack.prod.js
