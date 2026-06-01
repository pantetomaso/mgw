# 🚀 MGW Deployment Instructions - Final Steps

## ✅ What's Already Done

Your application is fully configured and ready to deploy:

- ✅ Dockerfile (multi-stage Node 20 Alpine build)
- ✅ railway.json (deployment configuration)
- ✅ Procfile (process management)
- ✅ .github/workflows/deploy-railway.yml (GitHub Actions)
- ✅ RAILWAY_DEPLOYMENT.md (complete guide)
- ✅ Repository pushed to GitHub (pantetomaso/mgw)
- ✅ Learning protocol and documentation

## 🎯 Next Steps - Complete in Railway Dashboard

### Step 1: Access Your Railway Project
1. Visit: https://railway.app/dashboard
2. Login with your Railway account
3. Go to: Projects → Select your project (5e379e1a-4107-4731-9dc6-12b3048d23cc)

### Step 2: Connect GitHub Repository
1. Look for the "mellow-unity" service (already created)
2. Click on **Settings** tab
3. Under "Source" section, click **Connect Repo**
4. Select **GitHub** option
5. Authorize GitHub access if prompted
6. Search for: `pantetomaso/mgw`
7. Click **Connect**

### Step 3: Configure Environment Variables
1. In the service, go to **Variables** tab
2. Add the following variables:

```
NODE_ENV = production
GITHUB_TOKEN = <your-github-token>
RAILWAY_TOKEN = <your-railway-token>
RAILWAY_PROJECT_ID = <your-project-id>
```

> ⚠️ Railway provides secret management - your tokens are encrypted

### Step 4: Configure Deployment Settings
1. Go to **Deploy** tab
2. Verify the following settings:

**Build Configuration:**
- Builder: Dockerfile
- Dockerfile path: ./Dockerfile
- Root directory: /

**Start Command:**
- `npm run preview`

**Port:**
- Port: 5173 (automatic)

**Health Check:**
- Path: /
- Timeout: 30s
- Interval: 30s

### Step 5: Trigger First Deployment
1. Click **Deploy** button (purple button in top right)
2. Railway will:
   - Pull code from GitHub
   - Build Docker image
   - Run health checks
   - Deploy to production
3. Watch logs in real-time
4. Wait for "Deployment successful" message

### Step 6: Access Your Application
Once deployment is complete:
1. Railway assigns a public URL
2. Format: `https://[service-name-random].railway.app`
3. Or use custom domain (see RAILWAY_DEPLOYMENT.md)

## 🔄 Automatic Deployments

Once configured, future deployments happen automatically:

```
Push to GitHub main branch
       ↓
GitHub notifies Railway via webhook
       ↓
Railway rebuilds Docker image
       ↓
New deployment with zero downtime
       ↓
Health checks verify service
       ↓
Old deployment replaced
```

## 📊 Monitoring

After deployment is live:

1. **Logs**: View real-time logs in Railway dashboard
2. **Metrics**: CPU, Memory, Network usage
3. **Deployments**: History of all deployments
4. **Rollback**: One-click rollback to previous version

## 🐛 Troubleshooting

### Deployment Fails During Build
1. Check build logs in Railway dashboard
2. Common issues:
   - Missing environment variables
   - Docker build syntax errors (check Dockerfile)
   - Missing dependencies (check package.json)

### Health Check Fails
1. Verify health check endpoint: GET `/`
2. Check application logs
3. Ensure port 5173 is correctly configured

### GitHub Connection Issues
1. Verify token has `repo` and `workflow` scopes
2. Check GitHub Actions shows green checkmarks
3. Verify webhook is active in GitHub repo settings

## 💡 Pro Tips

1. **Environment Variables**: Railway encrypts all secrets
2. **Quick Rollback**: Previous deployments stored for 30 days
3. **Custom Domains**: Add via Railways settings
4. **Auto-scaling**: Available on higher tiers
5. **Database**: Add PostgreSQL/Redis from Railway catalog

## 📞 Need Help?

- **Railway Docs**: https://docs.railway.app/
- **Repository**: https://github.com/pantetomaso/mgw
- **GitHub Actions**: https://github.com/pantetomaso/mgw/actions

## 🎉 Success Indicators

After deployment:
- ✅ Railway shows "Running" status
- ✅ Health checks passing (green)
- ✅ Application loads at public URL
- ✅ Logs show no errors
- ✅ Next GitHub push triggers auto-deployment

---

**Status**: Ready for final manual deployment step
**Last Updated**: 1 juin 2026
**Configuration**: Complete and tested
