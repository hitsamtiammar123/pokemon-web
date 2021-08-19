const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pokemon': path.resolve(__dirname, 'src'),
      '@pokemon-component': path.resolve(__dirname, 'src/component'),
      '@pokemon-lottie': path.resolve(__dirname, 'src/assets/lottie'),
      '@pokemon-svg': path.resolve(__dirname, 'src/assets/svg/index'),
      '@pokemon-images': path.resolve(__dirname, 'src/assets/images/index'),
      '@pokemon-navigation': path.resolve(__dirname, 'src/navigation'),
      '@pokemon-redux': path.resolve(__dirname, 'src/redux'),
      '@pokemon-component-layout': path.resolve(
        __dirname,
        'src/component/layouts'
      ),
      '@pokemon-component-svg': path.resolve(__dirname, 'src/component/svg'),
      '@pokemon-component-card': path.resolve(__dirname, 'src/component/cards'),
      '@pokemon-component-container': path.resolve(
        __dirname,
        'src/component/containers'
      ),
      '@pokemon-component-input': path.resolve(__dirname, 'src/component/inputs'),
      '@pokemon-utils': path.resolve(__dirname, 'src/utils'),
      '@pokemon-module': path.resolve(__dirname, 'src/module/pages'),
    },
  },
};
