const esbuild = require('esbuild')
const package = require('../package.json')

const commonOptions = {
  entryPoints: ['src/index.ts'],
  minify: true,
  banner: {
    js: `// ${package.author}`,
    css: `/*${package.author}*/`
  }
}

// ECMAScript Module
esbuild.buildSync({
  ...commonOptions,
  format: 'esm',
  outdir: 'dist/esm'
})

// IIFE
esbuild.buildSync({
  ...commonOptions,
  format: 'iife',
  platform: 'browser',
  globalName: 'Notify',
  outdir: 'dist'
})

// CSS
esbuild.buildSync({
  ...commonOptions,
  entryPoints: ['src/style.css'],
  outfile: 'dist/buzz-notify.css'
})
