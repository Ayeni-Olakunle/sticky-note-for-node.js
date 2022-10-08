const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("get notes")
})

router.post("/", (req, res) => {
    res.send("post note")
})

router.put("/:id", (req, res) => {
    res.send("update notes")
})

router.delete("/", (req, res) => {
    res.send("delete notes")
})

module.exports = router