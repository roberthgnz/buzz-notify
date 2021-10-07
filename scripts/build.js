const esbuild = require("esbuild");

// ECMAScript Module
esbuild.buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  format: "esm",
  outdir: "dist/esm",
});

// IIFE
esbuild.buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  format: "iife",
  globalName: "Notify",
  outdir: "dist",
});

// CSS
esbuild.buildSync({
  entryPoints: ["src/style.css"],
  minify: true,
  outfile: "dist/buzz-notify.css",
});
