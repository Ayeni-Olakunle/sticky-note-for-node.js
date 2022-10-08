const express = require('express')
const router = express.Router()
const { getNote, postNote, editNote, deleteNote } = require("../controllers/notecontroller")


router.route("/").get(getNote).post(postNote)
router.route("/:id").put(editNote).delete(deleteNote)

module.exports = router