const express = require('express')

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
    res.json({"message": "server started!"})
})
app.listen(port, () => console.log(`Server running at ${port}`))