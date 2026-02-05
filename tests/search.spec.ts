import { test, expect } from '@playwright/test';

test.describe('Pokemon Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Bonus tests - implement if you have time
});
