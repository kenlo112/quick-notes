const Note = require("../../models/note");

module.exports = {
    create,
    index,
};

async function index(req, res) {
  const notes = await Note.find({});
  res.status(200).json(notes);
}

async function create(req, res) {
  try {
    console.log(req.body);
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}
