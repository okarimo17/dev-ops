const notesRouter = require('express').Router();
const { validate} = require('../middlewares/validate');
const noteController = require('../controllers/noteController');
const {createNoteSchema} = require('../validations/noteValidation');

notesRouter.get('/', noteController.getNotes);
notesRouter.post('/',validate(createNoteSchema),  noteController.createNote);
notesRouter.delete('/:id', noteController.deleteNote);

module.exports = notesRouter;