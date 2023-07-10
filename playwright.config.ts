import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  workers: 5,
  retries: 1,
  use: {
    screenshot: 'only-on-failure',
    baseURL: 'https://the-internet.herokuapp.com/',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    }
  ]
}

export default config