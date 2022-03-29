const mix = require('laravel-mix');
const path = require('path/posix');
const { parseJsonText } = require('typescript');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the applicat>ion as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.tsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
            extensions: ["*",".js",".jsx",".ts",".tsx"]
        }
      });
