module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-id-pattern': null, // idでkebab-case以外も許容
    'selector-class-pattern': null, // classでkebab-case以外も許容
    'keyframes-name-pattern': null, // keyframesでkebab-case以外も許容
    'scss/at-mixin-pattern': null, // mixinでkebab-case以外も許容
  },
};
