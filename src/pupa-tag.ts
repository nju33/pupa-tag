import pupa from 'pupa';

/**
 * Create function by the template literal syntax
 *
 * @example
 * ```ts
 * pupaTag<{bar: string}>`foo {bar}`({bar: 'bar'});
 * // bar
 * ```
 */
export function pupaTag<A extends object>(
  strings: TemplateStringsArray,
  ...placeholders: (Function | string | undefined)[]
) {
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
