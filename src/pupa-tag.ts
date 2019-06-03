import pupa from 'pupa';

/**
 * To create function in the template literal syntax using by the pupa.
 *
 * @example
 * ```ts
 * pupaTag<{bar: string}>`foo {bar}`({bar: 'bar'});
 * // bar
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pupaTag<A extends Record<string | number | symbol, any>>(
  strings: TemplateStringsArray,
  ...placeholders: (Function | string | undefined)[]
) {
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  return (args: A = {} as A) => {
    const result = strings.reduce<string>((acc, str, i) => {
      const placeholder = placeholders[i];

      let current = acc;

      current += str;
      if (typeof placeholder === 'function') {
        current += placeholder(args);
      } else if (typeof placeholder === 'string') {
        current += placeholder;
      }

      return current;
    }, '');

    return pupa(result, args);
  };
}
