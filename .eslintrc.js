module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  globals: {
    document: true,
    window: true,
  },
  rules: {
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
  },
};
