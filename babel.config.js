module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'), {
        alias: {
          '@app': './src/applications',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@interfaces': './src/interfaces',
          '@ts': './src/ts'
        }
      }
    ],
    '@babel/proposal-object-rest-spread'
  ],
  ignore: [
    'node_modules',
    '**/*.spec.ts'
  ]
}
