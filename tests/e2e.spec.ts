import { test, expect } from '@playwright/test';

test.describe('End-to-End User Flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should complete full pokemon collection workflow', async ({ page }) => {
    // Search for first pokemon
    await page.getByTestId('search-input').fill('pikachu');
    await page.getByTestId('search-button').click();

    // Verify pokemon details are displayed
    await expect(page.getByTestId('pokemon-name')).toHaveText('pikachu');
    await expect(page.getByTestId('pokemon-id')).toHaveText('#25');
    await expect(page.getByTestId('pokemon-card')).toBeVisible();

    // Capture the pokemon
    await page.getByTestId('capture-button').click();

    // Verify it appears in captured list
    await expect(page.getByTestId('captured-pokemon-0')).toBeVisible();
    await expect(page.getByTestId('captured-list')).toHaveAttribute('data-count', '1');

    // Search for another pokemon
    await page.getByTestId('search-input').fill('bulbasaur');
    await page.getByTestId('search-button').click();
    await expect(page.getByTestId('pokemon-name')).toHaveText('bulbasaur');

    // Capture it
    await page.getByTestId('capture-button').click();

    // Verify both pokemon in captured list
    await expect(page.getByTestId('captured-pokemon-0')).toBeVisible();
    await expect(page.getByTestId('captured-pokemon-1')).toBeVisible();
    await expect(page.getByTestId('captured-list')).toHaveAttribute('data-count', '2');

    // Release the first pokemon
    await page.getByTestId('captured-pokemon-0').click();

    // Verify only second pokemon remains
    await expect(page.getByTestId('captured-pokemon-0')).toBeVisible();
    await expect(page.getByTestId('captured-pokemon-1')).not.toBeVisible();
    await expect(page.getByTestId('captured-list')).toHaveAttribute('data-count', '1');
  });

  test('should handle multiple search and capture cycles', async ({ page }) => {
    // TODO: Implement test
    // - Search for 5 different pokemon
    // - Capture each one after searching
    // - Verify all 5 are in captured list
    // - Verify correct order and names
  });

  test('should handle reaching and managing max capacity', async ({ page }) => {
    // TODO: Implement test
    // - Fill party to max (6 pokemon)
    // - Verify capture is disabled
    // - Release 2 pokemon
    // - Capture 2 new pokemon
    // - Verify party is full again
    // - Verify correct pokemon are in party
  });

  test('should preserve captured list when searching new pokemon', async ({ page }) => {
    // TODO: Implement test
    // - Capture 3 pokemon
    // - Search for a different pokemon (don't capture)
    // - Verify captured list still has 3 pokemon
    // - Verify pokemon card shows new pokemon
  });

  test('should handle rapid capture and release actions', async ({ page }) => {
    // TODO: Implement test
    // - Search for a pokemon
    // - Rapidly click capture button 3 times
    // - Verify 3 pokemon are captured
    // - Rapidly click on captured pokemon to release them
    // - Verify list becomes empty
  });

  test('should maintain state after multiple operations', async ({ page }) => {
    // TODO: Implement test
    // - Search "pikachu"
    // - Capture it
    // - Search "bulbasaur"
    // - Capture it twice
    // - Search "charmander"
    // - Don't capture
    // - Verify captured list has: pikachu, bulbasaur, bulbasaur
    // - Verify current pokemon card shows charmander
  });
});
