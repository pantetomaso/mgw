# syntax=docker/dockerfile:1

# --- Build stage: install deps and build the Next.js standalone output ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (no committed lockfile; resolve from package.json).
COPY package.json ./
RUN npm install

# Build the app. output: "standalone" emits a self-contained server bundle.
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Runtime stage: run the standalone Next.js server ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Static assets and the standalone server (server.js listens on $PORT, host 0.0.0.0).
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
