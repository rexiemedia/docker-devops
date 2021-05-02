const express = require('express')
const mongoose = require("mongoose")


const app = express();
mongoose.connect("mongodb://rexie:123456@devops_mongo_1:27017?authSource=admin")
.then(() => console.log("Success!"))
.catch(err => console.log('error', err))

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({"message": "server started!"})
})
app.listen(port, () => console.log(`Server running at ${port}`))

// 192.168.32.3
// 192.168.32.2