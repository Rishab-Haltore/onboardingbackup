
// import {configure} from '@storybook/angular';


// configure(require.context('../src', true , /\.stories\.ts$/), module);


module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
};
