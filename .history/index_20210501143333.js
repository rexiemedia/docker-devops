const express = require('express')
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")
const app = express();


const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`

connectWithRetry = () => {

    mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    })
    .then(() => console.log("Success!"))
    .catch((err) => {
        console.log('error', err)
        setTimeout(connectWithRetry, 2000)
    })
}



const port = process.env.PORT || 3000;
app.use(express.json())

app.get('/', (req, res, next) => {
    res.json({"message": "server started!!"})
})

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

app.listen(port, () => {
    console.log(`Server running at ${port}`),
    ""
    // mongoose.connect(mongoURL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false
    //     })
    //     .then(() => console.log("Success!"))
    //     .catch((err) => {
    //         console.log('error', err)
    // })
})
