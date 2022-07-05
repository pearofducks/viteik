import eik from '@eik/rollup-plugin'

export default (opts) => ({
  ...eik(opts),
  enforce: 'pre',
  apply: 'build'
})

export const outputOptions = {
  dir: './dist',
  assetFileNames: 'assets/[name].[ext]',
  entryFileNames: '[name].js',
  chunkFileNames: '[name].js'
}

