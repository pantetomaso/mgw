# Railway Deployment Guide

## Overview
Complete deployment setup for MGW to Railway.app using:
- Docker containers (multi-stage build)
- GitHub integration (auto-deploy)
- GitHub Actions workflows
- Environment variable management

## Project Configuration

### Files Created
- **Dockerfile** - Multi-stage Docker build (Node 20 Alpine)
- **Procfile** - Railway process definitions
- **railway.json** - Railway configuration with variables and health checks
- **.github/workflows/deploy-railway.yml** - Auto-deployment workflow

### Environment Variables
Required in Railway dashboard or `.env`:
```
GITHUB_TOKEN=<your-github-token>
RAILWAY_TOKEN=<your-railway-token>
RAILWAY_PROJECT_ID=<your-project-id>
NODE_ENV=production
```

Note: Never commit actual tokens to version control. Use Railway's secret management UI.

## Deployment Methods

### Method 1: GitHub Integration (Recommended)
1. Go to [Railway Dashboard](https://railway.app)
2. Click **New** → **GitHub Repo**
3. Select your repository
4. Railway auto-detects Dockerfile
5. Set environment variables (see above)
6. Auto-deploys on every push to main

**Advantages:**
- Automatic deployments
- Zero manual intervention
- Integrates with GitHub Actions
- Automatic rollbacks available

### Method 2: Railway CLI
```bash
# Install Railway CLI (if needed)
npm install -g @railway/cli

# Authenticate
railway login --token $RAILWAY_TOKEN

# Deploy
railway up --service mgw
```

### Method 3: Docker Push
```bash
# Build locally
docker build -t mgw:latest .

# Run locally (test)
docker run -p 5173:5173 mgw:latest
```

## Build & Deployment Flow

```
Push to GitHub main
       ↓
GitHub Actions CI/CD triggered
       ↓
Build with npm ci
       ↓
Run TypeScript build & lint
       ↓
Build Docker image (Dockerfile)
       ↓
Railway detects changes
       ↓
Deploy to Railway infrastructure
       ↓
Health checks verify service
       ↓
App accessible at Railway URL
```

## Monitoring Deployment

### Railway Dashboard
- Real-time deployment and application logs
- CPU, memory, network metrics
- Environment variable management
- Domain and port configuration

### GitHub Actions
- View workflows at Actions tab
- Each push triggers automatic workflow
- Build logs and test results

### Health Checks
- **Endpoint**: `http://localhost:5173/`
- **Interval**: Every 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts before failure

## Troubleshooting

### Build Fails
Check Docker build locally:
```bash
docker build -t test:latest .
```

### Port Issues
Railway automatically assigns ports - verify in dashboard

### Environment Variables Not Loading
1. Check Railway dashboard variables
2. Ensure `NODE_ENV=production`
3. Verify GitHub token has `repo` scope

### Service Won't Start
1. Check logs in Railway dashboard
2. Verify health check endpoint `/`
3. Ensure `npm run preview` works locally

## Scaling & Performance

### Initial Configuration
- **Memory**: 512MB (default)
- **CPU**: Shared (can upgrade)
- **Port**: Auto-assigned by Railway

### To Scale Up
1. Go to Railway dashboard
2. Select service
3. Increase memory/CPU allocation
4. Service restarts automatically

## References

- [Railway Documentation](https://docs.railway.app/)
- [Railway GraphQL API](https://docs.railway.app/reference)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [TanStack Start Guide](https://tanstack.com/start/latest)
