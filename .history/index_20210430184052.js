const express = require('express')
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');


const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Success!"))
.catch(err => console.log('error', err))

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({"message": "server started!"})
})
app.listen(port, () => console.log(`Server running at ${port}`))
