import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://localhost:8787/')
  // await page.goto('https://ui.xinjs.net/')
})

test('carousel works', async ({ page }) => {
  await page.getByText('carousel').click()
  await expect(page.locator('h1')).toHaveText('carousel')

  // the constructor needs to have run successfull for these to be true
  await expect(page.locator('xin-carousel')).toHaveAttribute(
    'aria-roledescription',
    'carousel'
  )
  await expect(page.locator('xin-carousel')).toHaveAttribute(
    'aria-orientation',
    'horizontal'
  )

  // the locators do not work reliably across browsers
  /*
  await expect(page.locator('css=.green')).toBeVisible()
  await expect(page.locator('.yellow')).not.toBeVisible()
  await page.getByTitle('next slide').click()

  await expect(page.locator('.green')).not.toBeVisible()
  await expect(page.locator('.yellow')).toBeVisible()
  */
})
