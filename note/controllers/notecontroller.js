const asyncHandler = require("express-async-handler")


const getNote = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a note")
        console.log(req.body);
    }

    res.status(200).json({ note: "working well too" });
})

const postNote = asyncHandler(async (req, res) => {
    res.send("post notes")
})

const editNote = asyncHandler(async (req, res) => {
    res.send("edit notes " + req.params.id)
})

const deleteNote = asyncHandler(async (req, res) => {
    res.send("delete notes " + req.params.id)
})

module.exports = {
    getNote,
    postNote,
    editNote,
    deleteNote
}