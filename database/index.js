const mongoose = require('mongoose');
console.log('DATABASE INDEX CARGADO');
console.log('MONGODB_URL=', process.env.MONGODB_URL);
console.log('FOO=', process.env.FOO);

const { config } = require('../config/env');

// Set strictQuery before connection
mongoose.set('strictQuery', false);

const MONGODB_CONFIG = {
    url: config.MONGODB_URL,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
    }
};

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('process.env.MONGODB_URL:', process.env.MONGODB_URL);
console.log('config.MONGODB_URL:', config.MONGODB_URL);

console.log(`🔌 Connecting to MongoDB...`);

mongoose.connect(MONGODB_CONFIG.url, MONGODB_CONFIG.options)
.then(() => {
    console.log("✅ Successful connection with MongoDB");
})
.catch((err) => {
    console.log('❌ Error: Connection to MongoDB not successful', err.message);
    process.exit(1);
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
