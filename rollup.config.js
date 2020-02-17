import { emptyDir } from "rollup-plugin-empty-dir";
import { chromeExtension, pushReloader } from "rollup-plugin-chrome-extension";
import { eslint } from "rollup-plugin-eslint";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
import iife from "rollup-plugin-iife";
import zip from "rollup-plugin-zip";

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
    eslint({ fix: true, throwOnError: true }),
    typescript(),
    !production && pushReloader(),
    resolve(),
    commonjs(),
    postcss(),
    iife(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    zip({ dir: "dist" })
  ]
};
