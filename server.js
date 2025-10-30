const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('.'));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Admin Panel running on port ${PORT}`);
});
