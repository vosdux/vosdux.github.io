module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', '@linaria'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
      assumptions: {
        setPublicClassFields: false,
      },
    },
  },
};
