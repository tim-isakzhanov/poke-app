import { test, expect } from '@playwright/test';

test.describe('Pokemon Release', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Bonus tests - implement if you have time
});
