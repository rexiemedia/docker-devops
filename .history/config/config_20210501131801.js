const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_IP: process.env.MONGO_IP || "devops_mongo_1",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
} 