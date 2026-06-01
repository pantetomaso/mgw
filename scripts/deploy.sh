#!/bin/bash
# Deploy MGW to Railway
# This script sets up automatic deployment from GitHub to Railway

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🚀 MGW Deployment Setup"
echo "========================"
echo ""

# Load environment variables
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
    echo "✅ Environment variables loaded"
else
    echo "❌ .env file not found"
    exit 1
fi

# Verify configuration
echo ""
echo "📋 Verifying configuration..."
echo "  - GITHUB_TOKEN: ${GITHUB_TOKEN:0:10}..."
echo "  - RAILWAY_TOKEN: ${RAILWAY_TOKEN:0:10}..."
echo "  - RAILWAY_PROJECT_ID: $RAILWAY_PROJECT_ID"
echo "  - Repository: pantetomaso/mgw"
echo ""

# Check Docker configuration
echo "🐳 Docker configuration:"
if [ -f Dockerfile ]; then
    echo "  ✅ Dockerfile exists"
else
    echo "  ❌ Dockerfile missing"
    exit 1
fi

if [ -f railway.json ]; then
    echo "  ✅ railway.json exists"
else
    echo "  ❌ railway.json missing"
    exit 1
fi

# Check GitHub Actions
echo ""
echo "🔄 GitHub Actions workflows:"
if [ -f .github/workflows/ci.yml ]; then
    echo "  ✅ CI workflow exists"
else
    echo "  ⚠️  CI workflow missing"
fi

if [ -f .github/workflows/deploy-railway.yml ]; then
    echo "  ✅ Deploy workflow exists"
else
    echo "  ⚠️  Deploy workflow missing"
fi

# Verify repository is clean
echo ""
echo "📦 Repository status:"
if git rev-parse --git-dir > /dev/null 2>&1; then
    CHANGES=$(git status --short | wc -l)
    if [ $CHANGES -eq 0 ]; then
        echo "  ✅ Repository is clean"
    else
        echo "  ⚠️  Repository has $CHANGES uncommitted changes"
        echo ""
        echo "Uncommitted changes:"
        git status --short
        echo ""
        read -p "Continue anyway? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
else
    echo "  ❌ Not a git repository"
    exit 1
fi

# Summary
echo ""
echo "════════════════════════════════════════════"
echo "✅ DEPLOYMENT READY"
echo "════════════════════════════════════════════"
echo ""
echo "All configuration is in place!"
echo ""
echo "Next steps:"
echo "1. Go to: https://railway.app/dashboard"
echo "2. Select project: $RAILWAY_PROJECT_ID"
echo "3. Connect GitHub repo: pantetomaso/mgw"
echo "4. Add environment variables in Railway UI"
echo "5. Click DEPLOY"
echo ""
echo "After connecting GitHub:"
echo "- Every push to main triggers auto-deployment"
echo "- CI/CD pipeline runs automatically"
echo "- Logs visible in Railway dashboard"
echo ""
echo "Repository: https://github.com/pantetomaso/mgw"
echo "Documentation: See DEPLOYMENT_STATUS.md"
echo ""
