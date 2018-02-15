{
  "name": "cypress-image-check",
  "version": "0.0.1",
  "description": "Checks that cypress is correctly installed trying to open the Bamboo web.",
  "scripts": {
    "cypress": " $(npm bin)/cypress run --browser chrome"
  },
  "keywords": [],
  "author": "Jorge Mascarell <Jorge.MASCARELL@ext.euipo.europa.eu>",
  "license": "",
  "dependencies": {
    "cypress": "^1.4.1",
    "mocha-junit-reporter": "^1.17.0",
    "mocha": "~1.18",
    "mocha-bamboo-reporter": "*"
  },
  "devDependencies": {
    "cypress": "^1.4.1",
    "mocha-junit-reporter": "^1.17.0",
    "mocha": "~1.18",
    "mocha-bamboo-reporter": "*"
  }
}