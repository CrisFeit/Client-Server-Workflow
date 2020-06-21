module.exports = {
  presets: [
    [

      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './app/server/config',
        '@models': './app/server/models',
        '@views': './app/server/views',
        '@controllers': './app/server/controllers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
