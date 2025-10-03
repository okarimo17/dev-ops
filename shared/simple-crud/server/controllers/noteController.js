const noteService = require('../services/noteService')

async function getNotes(req, res, next){
  try {
    const notes = await noteService.getAll()
    res.json(notes)
  } catch(error){        
    next(err);
  }
}

async function createNote (req, res, next) {
  try {
    const note = await noteService.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

async function deleteNote (req, res, next) {
  try {
    const {id} = req.params    
    await noteService.remove(id);
    res.status(201).json(`Note ${id} delete successfully`);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getNotes, 
  createNote, 
  deleteNote
}