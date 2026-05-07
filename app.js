const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const VM_IP = '192.168.1.4';

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// Store data in memory (temporary)
let savedData = [];

// Load existing data from JSON file on startup
if (fs.existsSync('data.json')) {
    try {
        const fileData = fs.readFileSync('data.json', 'utf8');
        savedData = JSON.parse(fileData);
        console.log(`Loaded ${savedData.length} existing records`);
    } catch (err) {
        console.log('No existing data file found, starting fresh');
    }
}

// API Endpoints
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    
    console.log('Received data:', receivedData);
    
    // Add timestamp if not provided
    if (!receivedData.timestamp) {
        receivedData.timestamp = new Date();
    }
    
    // Save to memory array
    savedData.push(receivedData);
    console.log('Total saved items:', savedData.length);
    
    // Save to log file
    fs.appendFileSync('data.log', JSON.stringify(receivedData) + '\n');
    
    // Save to JSON file (overwrite entire array)
    fs.writeFileSync('data.json', JSON.stringify(savedData, null, 2));
    
    res.json({ 
        received: receivedData,
        status: 'success',
        totalStored: savedData.length
    });
});

app.get('/api/data', (req, res) => {
    res.json({
        count: savedData.length,
        data: savedData
    });
});

app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello from Ubuntu VM!',
        vmIP: VM_IP,
        totalRecords: savedData.length,
        timestamp: new Date()
    });
});

// Optional: Delete all data (for testing)
app.delete('/api/data', (req, res) => {
    savedData = [];
    fs.writeFileSync('data.json', JSON.stringify(savedData, null, 2));
    fs.writeFileSync('data.log', '');
    res.json({ message: 'All data deleted', status: 'success' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log('\n========================================');
    console.log('🚀 Server is running!');
    console.log('========================================');
    console.log(`📱 Access the HTML interface:`);
    console.log(`   http://${VM_IP}:${PORT}`);
    console.log(`\n📡 API Endpoints:`);
    console.log(`   GET  http://${VM_IP}:${PORT}/api/hello`);
    console.log(`   POST http://${VM_IP}:${PORT}/api/data`);
    console.log(`   GET  http://${VM_IP}:${PORT}/api/data`);
    console.log(`   DEL  http://${VM_IP}:${PORT}/api/data`);
    console.log('\n========================================\n');
});
