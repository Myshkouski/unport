import { defineWorkspace } from "vitest/config"

export default defineWorkspace([
  {
    test: {
      name: "node",
      dir: "src/node"
    }
  },
  {
    test: {
      name: "browser",
      dir: "src/browser",
      browser: {
        name: "chromium",
        provider: 'playwright',
        enabled: true,
        headless: true,
        screenshotDirectory: "reports/screenshots"
      }
    }
  },
])
