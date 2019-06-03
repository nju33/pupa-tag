# pupa-tag

[![github](https://badgen.net/badge//nju33,pupa-tag/000?icon=github&list=1)](https://github.com/nju33/pupa-tag)
[![npm:version](https://badgen.net/npm/v/pupa-tag?icon=npm&label=)](https://www.npmjs.com/package/pupa-tag)
[![typescript](https://badgen.net/badge/lang/typescript/0376c6?icon=npm)](https://www.typescriptlang.org/)
[![ci:status](https://badgen.net/circleci/github/nju33/pupa-tag)](https://circleci.com/gh/nju33/pupa-tag)
[![document:typedoc](https://badgen.net/badge/document/typedoc/9602ff)](https://docs--pupa-tag.netlify.com/)
[![license](https://badgen.net/npm/license/pupa-tag)](https://github.com/nju33/pupa-tag/blob/master/LICENSE)
[![browserslist](https://badgen.net/badge/browserslist/chrome,edge/ffd539?list=1)](https://browserl.ist/?q=last+1+chrome+version%2C+last+1+edge+version)
[![code style:prettier](https://badgen.net/badge//prettier/ff69b3?label=code%20style)](https://github.com/prettier/prettier)

## Usage

````ts
/**repare of using this
 * ```sh
 * yarn add pupa-tag
 * ```
 */
import appropriateName from 'pupa-tag';
// e.g.) import sql from 'pupa-tag';
````

or

```html
<script src="https://unpkg.com/pupa-tag/pupa-tag.js"></script>
<script>
  // Can use the `pupaTag` here.
</script>
```

## Example by TypeScript

In the below, definition the `selectById` which is expected passing into arguments `{id: number}`.

```ts
const selectById = sql<{id: number}>`select * from foo where id = {id}`;
console.log(selectById({id: 123}));
// 'select * from foo where id = 123'
```

You could divide into serveral contents. For example in the below, sentence after the `where` is allocated as the `whereBy` variable.

```ts
const whereBy = pupaTag<{id: number}>`where id = {id}`;
const selectById = pupaTag<{id: number}>`select * from foo ${whereBy}`;
console.log(selectById({id: 123}));
// 'select * from foo where id = 123'
```

And also the `whereBy` is function thus you can use its result as `string`. (`({id: number}) => string`).

```ts
const whereBy = pupaTag<{id: number}>`where id = {id}`;
const selectById = pupaTag<{id: number}>`select * from foo ${whereBy({
  id: 123,
})}`;
console.log(selectById());
// 'select * from foo where id = 123'
```

[![Edit pupa-tag](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/239vvyxy40?module=%2Fsrc%2Findex.ts)
