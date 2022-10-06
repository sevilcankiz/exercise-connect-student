
const mongoose = require('mongoose');

const db = async (req, res) => {
    try{
        const URI = process.env.MONGO_URI;
        mongoose.connect(URI);
        console.log('MongoDB connected to DB');
    } catch (err) {
        console.log(err.meddage);
        res.status(500).send('Could not connect to DB');
    }
};

module.exports = db;