const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  plugins: [
    '@babel/plugin-proposal-private-property-in-object',
    { loose: false },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
