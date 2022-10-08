const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const { errorHandler } = require("./middleware/errorMiddleWare")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/notes", require("./routes/noteRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log('listening on port ' + port);
})