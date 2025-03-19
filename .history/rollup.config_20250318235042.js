import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import ignore from '@rollup/plugin-ignore';

export default {
  input: './assets/src/index.ts', // Updated input file to index.ts
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    ignore(['./assets/greensock/ScrollTrigger.min.js.map'])
  ]
};