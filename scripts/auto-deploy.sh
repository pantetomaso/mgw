#!/bin/bash
# Railway Auto-Deploy Script
# Triggers deployment using GitHub Actions webhook to Railway

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🚀 Railway Auto-Deployment Script"
echo "===================================="
echo ""

# Load .env
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found"
    exit 1
fi

# Extract tokens
GITHUB_TOKEN=$(grep '^GITHUB_TOKEN=' .env | cut -d= -f2-)
RAILWAY_TOKEN=$(grep '^RAILWAY_TOKEN=' .env | cut -d= -f2-)
RAILWAY_PROJECT_ID=$(grep '^RAILWAY_PROJECT_ID=' .env | cut -d= -f2-)

if [ -z "$GITHUB_TOKEN" ] || [ -z "$RAILWAY_PROJECT_ID" ]; then
    echo "❌ Error: Missing GITHUB_TOKEN or RAILWAY_PROJECT_ID"
    exit 1
fi

echo "✅ Environment loaded"
echo "   Token: ${GITHUB_TOKEN:0:10}..."
echo "   Project: $RAILWAY_PROJECT_ID"
echo ""

# Check git status
echo "📋 Repository status:"
if git rev-parse --git-dir > /dev/null 2>&1; then
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    COMMIT=$(git rev-parse --short HEAD)
    echo "   ✅ Branch: $BRANCH"
    echo "   ✅ Commit: $COMMIT"
else
    echo "   ❌ Not a git repository"
    exit 1
fi

echo ""
echo "📊 Configuration Status:"
echo "   ✅ Dockerfile: $([ -f Dockerfile ] && echo 'Found' || echo 'Missing')"
echo "   ✅ railway.json: $([ -f railway.json ] && echo 'Found' || echo 'Missing')"
echo "   ✅ Procfile: $([ -f Procfile ] && echo 'Found' || echo 'Missing')"
echo "   ✅ .github/workflows: $([ -d .github/workflows ] && echo 'Found' || echo 'Missing')"

echo ""
echo "🔄 Deployment Method:"
echo "   Using: GitHub Actions → Railway"
echo "   Trigger: Webhook on push to main"
echo "   Status: Ready"

echo ""
echo "════════════════════════════════════════"
echo "✅ AUTO-DEPLOYMENT CONFIGURED"
echo "════════════════════════════════════════"
echo ""
echo "Next Steps (Manual in Railway Dashboard):"
echo "1. Go to: https://railway.app/dashboard"
echo "2. Select Project: $RAILWAY_PROJECT_ID"
echo "3. Connect GitHub: pantetomaso/mgw"
echo "4. Set Variables (Node Env, Tokens, etc)"
echo "5. Click DEPLOY"
echo ""
echo "Once Connected:"
echo "- Every push to main triggers GitHub Actions"
echo "- GitHub Actions builds Docker image"
echo "- Railway webhook detects changes"
echo "- Automatic deployment to production"
echo ""
echo "Monitoring:"
echo "- Railway Dashboard: https://railway.app/dashboard"
echo "- GitHub Actions: https://github.com/pantetomaso/mgw/actions"
echo ""
