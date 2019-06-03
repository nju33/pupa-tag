import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './dist/module/index.js',
  output: {
    file: './pupa-tag.js',
    format: 'iife',
    name: 'pupaTag',
    sourceMap: true,
  },
  plugins: [resolve(), commonjs()],
};
