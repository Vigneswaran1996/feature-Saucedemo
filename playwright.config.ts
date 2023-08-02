import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

  // testMatch :["login.test.ts"],
  // testMatch :["alerts.test.ts"],
  // testMatch :["dropdown.test.ts"],
  // testMatch :["Iframe.test.ts"],
  // testMatch :["windowhandling.test.ts"],
  // testMatch :["Calender.test.ts"],
  // testMatch :["filedownload.test.ts"],

  testMatch : ["pomtest/OrderItems.test.ts"],

  use:{
    baseURL:"https://www.saucedemo.com/",
    headless: false,
    screenshot:"on",
    video:"off"
  },

  reporter:[["dot"],["json",{

    outputFile:"jsonFileReport/jsonReport.json"

  }], ["html",{

      open: "never"
  }]]

};

export default config;

