const express = require('express')
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const postRouter = require("./routes/postRoutes")
const app = express();


const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`

console.log(MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT)
connectWithRetry = () => {
        mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(() => console.log("Success!"))
    .catch((err) => {
        console.log('error', err)
        setTimeout(connectWithRetry, 5000)
    })
}



const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({"message": "server started!!"})
})

app.use("/api/v1/posts", postRouter)
app.listen(port, () => console.log(`Server running at ${port}`))
