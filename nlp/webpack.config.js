import path from 'path';
import { NodePolyfillPlugin } from 'node-polyfill-webpack-plugin';

export default {
  mode: 'development',  
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "vm": require.resolve("vm-browserify"),
      "dns": false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
