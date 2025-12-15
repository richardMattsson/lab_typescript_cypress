const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    async setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);

      on("task", {
        resetCoverage() {
          return null;
        },
      });

      return config;
    },
    env: {
      PGURI: process.env.PGURI,
    },

    baseUrl: "http://localhost:5173",
    specPattern: [
      // E2E-filer Cypress letar efter som standard
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      // Tillägg för Cucumber
      "cypress/e2e/**/*.feature",
    ],
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      on("task", {
        resetCoverage() {
          return null;
        },
      });
      return config;
    },
  },
});
