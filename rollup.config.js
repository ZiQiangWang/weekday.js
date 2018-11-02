import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/weekdayjs.min.js',
    name: 'weekdayjs',
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      output: { comments: false },
      compress: { warnings: false }
    }),
  ],
};
