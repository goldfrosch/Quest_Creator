const { mergeConfig } = require('vite');
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');

module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
  features: {
    previewMdx2: true,
  },
  previewHead: (head) => `
    ${head}
    <style>
     body {display: contents !important;}
    </style>
  `,
  viteFinal: async (config, { configType }) => {
    config.plugins = [...config.plugins, new vanillaExtractPlugin()];
    return mergeConfig(config, {});
  },
}