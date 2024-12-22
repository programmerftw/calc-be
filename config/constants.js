require('dotenv').config();

module.exports = {
    SERVER_URL: 'localhost',
    PORT: 8900,
    ENV: process.env.ENV || 'dev',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};
