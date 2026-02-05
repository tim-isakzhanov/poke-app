import { test, expect } from '@playwright/test';

test.describe('Pokemon Capture', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Bonus tests - implement if you have time
});
