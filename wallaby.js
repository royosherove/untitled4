module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.ts', instrument: true, load: true, ignore: false },
      { pattern: 'src/**/*spec.ts', instrument: true, load: false, ignore: true }
    ],

    tests: [
      { pattern: 'src/**/*spec.ts', instrument: true, load: false, ignore: true }
      ],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'React'
      })
    },
  };
};
