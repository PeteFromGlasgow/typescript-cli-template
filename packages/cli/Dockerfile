# ---- Builder Stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy package.json files for workspace protocol resolution
COPY packages/core/package.json ./packages/core/package.json
COPY packages/cli/package.json ./packages/cli/package.json

# Install all dependencies (including devDependencies for build)
# Using --frozen-lockfile for reproducible installs
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/core ./packages/core
COPY packages/cli ./packages/cli
COPY tsconfig.json ./

# Build the CLI package
# Ensure the filter matches the package name in packages/cli/package.json
RUN pnpm --filter @typescript-cli-template/cli build

# Prune dev dependencies for production stage copy
RUN pnpm prune --prod

# ---- Runner Stage ----
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/cli/dist ./packages/cli/dist
COPY --from=builder /app/packages/cli/package.json ./packages/cli/package.json
COPY --from=builder /app/packages/core/package.json ./packages/core/package.json
# Copy the built core package if needed at runtime (adjust if core is bundled)
COPY --from=builder /app/packages/core/dist ./packages/core/dist

# Set the entrypoint
ENTRYPOINT ["node", "./packages/cli/dist/cli.js"]
