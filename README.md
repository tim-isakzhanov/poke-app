# QA Engineer Exercise

Welcome to the QA technical exercise. The app has been fully implemented and is ready for testing. Your task is to write Playwright tests to ensure the implementation meets AC and did not miss edge cases.

## About the App

A Pokemon collection app that allows users to search and capture Pokemon using the [PokeAPI](https://pokeapi.co).

**Features:**
- Can search for a Pokemon by name or ID
- Displays the following Pokemon details
   - Image
   - Name
   - ID
   - Type
   - Stats (HP, Attack, Defense, and Speed)
- The user can capture Pokemon up to 6 Pokemon
- The user can release captured Pokemon by selecting them
- The user can capture the same Pokemon multiple times

**Limitations:**
- A maximum 6 Pokemon can be captured at once
- The search requires a valid Pokemon name or ID from PokeAPI
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

Plan and write end-to-end tests in `tests/e2e.spec.ts` that ensure the work has been implemented following the criteria above. Identify gaps or missing details from the requirements that may be discovered during testing.

### FYI
1. Feel free to ask as many clarifying questions as needed
2. If needed, you are welcome to browse for documentation

## Available Scripts

- `yarn test:e2e` - Run all tests (headless)
- `yarn test:e2e:ui` - Run with UI mode (recommended for development)
- `yarn test:e2e:headed` - Run with browser visible
- `yarn test:e2e:debug` - Debug mode with step-through


Good luck! 🚀
