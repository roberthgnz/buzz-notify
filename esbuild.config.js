// esbuild src/index.ts --bundle --minify --format=esm --outdir=dist --target=chrome80
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    format: "esm",
    minify: true,
    legalComments: "inline",
    target: "chrome80",
  })
  .catch(() => process.exit(1));
