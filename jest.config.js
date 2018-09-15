module.exports = {
    setupFiles: ['<rootDir>/tests/unit-tests/testsSetup.js'],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    testURL: 'http://localhost'
};

//   meteor test --once --driver-package meteortesting:mocha