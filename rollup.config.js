import { emptyDir } from "rollup-plugin-empty-dir";
import { chromeExtension, pushReloader } from "rollup-plugin-chrome-extension";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
import iife from "rollup-plugin-iife";
import zip from "rollup-plugin-zip";

import postcss_url from "postcss-url";

// We consider it's production if we're not watching
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/manifest.json",
  output: {
    dir: "dist/dev",
    format: "esm"
  },
  plugins: [
    emptyDir(),
    chromeExtension({ dynamicImportWrapper: false }), // dynamic import wrapper is not compatible with FF
    typescript(),
    !production && pushReloader(),
    resolve(),
    commonjs(),
    postcss({
      plugins: [postcss_url({ url: "inline" })]
    }),
    iife(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    zip({ dir: "dist" })
  ]
};
