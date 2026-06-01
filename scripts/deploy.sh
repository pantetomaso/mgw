#!/usr/bin/env bash
# Deploy the current working tree to Railway (project "Marseille Good Waves").
# Uploads the repo and builds it remotely from the Dockerfile.
#
# Auth: uses the Railway *account* token stored as RAILWAY_TOKEN in .env, exposed
# to the CLI as RAILWAY_API_TOKEN. Requires the Railway CLI (`railway`) on PATH.
set -euo pipefail
cd "$(dirname "$0")/.."

RAILWAY_API_TOKEN="$(grep '^RAILWAY_TOKEN=' .env | cut -d= -f2-)"
PROJECT_ID="$(grep '^RAILWAY_PROJECT_ID=' .env | cut -d= -f2-)"
export RAILWAY_API_TOKEN

exec railway up \
  --project "$PROJECT_ID" \
  --service mellow-unity \
  --environment production \
  --ci
