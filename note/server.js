const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000


app.use("/api/notes", require("./routes/noteRoutes"))

app.listen(port, () => {
    console.log('listening on port ' + port);
})