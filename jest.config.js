module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "bower_components", "shared"],
  
    moduleNameMapper: {
        "\\.(css|less|scss)$": "<rootDir>/tests/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/tests/__mocks__/fileMock.js"
    },

    setupFiles: ["<rootDir>/tests/setup.js"]
}