const express = require('express')
const mongoose = require("mongoose")
const session = require("express-session")
const redis = require("redis")

let RedisStore = require("connect-redis")(session)
let redisClient = redis.createClient({
    host: REDIS_URL
})
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, SESSION_SECRET } = require('./config/config');

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")
const { connect } = require('./routes/userRoutes')

const app = express();


const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`

const port = process.env.PORT || 3000;

connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        })
        .then(() => console.log("Success connected to DB!"))
        .catch((err) => {
            console.log('error', err);
        setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry();

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 30000
    }
}))
app.use(express.json())
app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

app.get('/', (req, res, next) => {
    res.json({"message": "server started!!"})
})

app.listen(port, () => {
    console.log(`Server running at ${port}`),
    ""
    // mongoose.connect(mongoURL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    //     })
    //     .then(() => console.log("Success!"))
    //     .catch((err) => {
    //         console.log('error', err)
    // })
})
