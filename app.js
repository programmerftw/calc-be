const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculatorRouter = require('./routes/calculatorRoute');

const app = express();
const PORT = process.env.PORT || 8900;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
});

// Calculator route
app.use('/calculate', calculatorRouter);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
