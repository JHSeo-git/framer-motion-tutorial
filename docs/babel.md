# Babel

Javascript transpiler 로 최신 문법을 구형 문법으로 변환해주는 변환기.

preset(많이 사용되는 babel plugin 묶음, ie. env, react, typescript), 플러그인 등을 통해 문법 변환과 컴파일 그 쯤사이의 기능을 제공해줌.

> Why use?
>
> - IE를 포함한 구형 브라우저는 ES6 모듈을 지원하지 않는다.
> - 브라우저의 ES6 모듈 기능을 사용하더라도 트랜스파일링이나 번들링이 필요하다.
> - 브라우저에서 아직 지원하지 않는 기능(Bare import 등)이 있다.
> - 브라우저에서 점차 해결되고는 있지만 아직 몇가지 이슈가 있다.

## Install

Install babel presets plugins and babel-loader which is used in webpack.

```bash
yarn add -D @babel/core \
    @babel/preset-env \
    @babel/preset-react \
    @babel/preset-typescript \
    babel-loader
```

## Config

Create a simple config.

use env preset, react preset, typescript preset.

we use a React17. so it not required that `import React from 'react'` code.

For babel config `runtime: 'automatic'`.
it will add default `import React from 'react'`

```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

## babel-loader

See webpack document.
