module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg|mp4)$": "jest-transform-stub", 
        '\\.css$': '<rootDir>/styleMock.js',
        '\\.mp4$': '<rootDir>/__mocks__/fileMock.js'
    },
    transformIgnorePatterns: ["/node_modules/"],
};