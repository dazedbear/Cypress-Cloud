const { defineConfig } = require("cypress");
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installLogsPrinter(on, {
        printLogsToFile: "always",
        outputRoot: "cypress/results/detailCommandLogs",
        outputTarget: {
          "detailCommandLogs.json": "json",
        },
      });
    },
    baseUrl: "https://example.cypress.io",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videoCompression: true,
  },
});
