# Typescript CLI Base

This is a powerful, multi package Typescript project base which has examples for a CLI, Browser and library.

## Features

*   📦 **Multi-package Monorepo:** Uses `pnpm` workspaces to manage `core` library, `cli`, and `browser` packages.
*   📚 **Core Library Example:** Demonstrates a reusable TypeScript library (`packages/core`).
*   💻 **CLI Application Example:** Includes a command-line interface built with TypeScript (`packages/cli`).
*   🌐 **Browser Script Example:** Shows how to bundle TypeScript for use in a web browser (`packages/browser`).
*   🧪 **Unit Testing:** Integrated unit testing setup with examples using Vitest across all packages.
*   💅 **Linting & Style:** Consistent code style enforced by ESLint & Stylistic.
*   🐳 **Docker Support:** Dockerfile provided for building the CLI application (`packages/cli/Dockerfile`).
*   훅 **Git Hooks:** Pre-commit hooks configured using Husky to ensure code quality before commits.
*   ⚙️ **Editor Configuration:** Includes a `.editorconfig` file for consistent editor settings.
*   ✨ **Automated Versioning & Changelogs:** Uses Changesets for streamlined package versioning and changelog generation.
*   🚀 **CI/CD:** GitHub Actions workflows for automated testing, building, and releasing.

## Usage

This project uses `pnpm` to support multiple packages in the same repository.

### Setup

```bash
# Enable Corepack
corepack enable

# Install all packages recursively
pnpm install -r
```

