module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MyWebApp/' // Replace with your repository name
    : '/',
  outputDir: 'dist'
}
