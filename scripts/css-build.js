const esbuild = require('esbuild')
const package = require('../package.json')

const commonOptions = {
  entryPoints: ['src/index.ts'],
  minify: true,
  banner: {
    css: `/*${package.author}*/`,
  },
}

// CSS
esbuild.buildSync({
  ...commonOptions,
  entryPoints: ['src/style.css'],
  outfile: 'dist/buzz-notify.css',
})
