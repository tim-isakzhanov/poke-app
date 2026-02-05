# QA Engineer Exercise

Welcome to the QA technical exercise. The app has been fully implemented and is ready for testing. Your task is to write Playwright tests to verify the functionality.

## About the App

A Pokemon collection app that allows users to search and capture Pokemon using the [PokeAPI](https://pokeapi.co).

**Features:**
- Search Pokemon by name or ID
- Display Pokemon details: image, name, ID, types, and stats (HP, Attack, Defense, Speed)
- Capture Pokemon to your party (up to 6 maximum)
- Release captured Pokemon by clicking on them
- Capture the same Pokemon multiple times

**Limitations:**
- Maximum 6 Pokemon can be captured at once
- Requires valid Pokemon name or ID from PokeAPI
- Real API calls - requires internet connection

## Quick Start

1. Install dependencies and browsers:
   ```bash
   yarn install
   npx playwright install
   ```

2. Run the app to familiarize yourself with it:
   ```bash
   yarn dev
   ```
   Open http://localhost:5173 and test all features manually.

3. Run Playwright tests in UI mode:
   ```bash
   yarn test:e2e:ui
   ```

## Your Task

Implement 2-3 end-to-end tests in `tests/e2e.spec.ts`. Each test has TODO comments explaining what to verify.

### Recommended Tests to Implement:
1. **"should complete full pokemon collection workflow"** - Basic flow: search, capture, release
2. **"should handle multiple search and capture cycles"** - Search and capture 5 different pokemon
3. **"should handle reaching and managing max capacity"** - Test 6 pokemon limit

## Available Scripts

- `yarn test:e2e` - Run all tests (headless)
- `yarn test:e2e:ui` - Run with UI mode (recommended for development)
- `yarn test:e2e:headed` - Run with browser visible
- `yarn test:e2e:debug` - Debug mode with step-through


Good luck! 🚀