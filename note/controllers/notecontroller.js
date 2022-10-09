const asyncHandler = require("express-async-handler")
const Note = require("../models/noteModel")


const getNote = asyncHandler(async (req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes);
})

const postNote = asyncHandler(async (req, res) => {
    if (!req.body.linkName && !req.body.link && !req.body.description) {
        res.status(400)
        throw new Error("Please add a note")
        console.log(req.body);
    }
    const notes = await Note.create({
        linkName: req.body.linkName,
        link: req.body.link,
        description: req.body.description,
    })
    res.status(200).json(notes);
})

const editNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(400)
        throw new Error(`Note not found`);
    }

    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updateNote);
})

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(400);
        throw new Error("Note not found");
    }
    await note.remove();
    res.status(200).json({ deleted: `Item with id of ${req.params.id} is deleted` });
})

module.exports = {
    getNote,
    postNote,
    editNote,
    deleteNote
}