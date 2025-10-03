const Joi  = require("joi");

const createNoteSchema = Joi.object({
  content: Joi.string().min(1).max(255).required().messages({
      "string.base": "Note content must be a text",
      "string.empty": "Note content cannot be empty",
      "string.min": "Note content must be at least {#limit} characters",
      "string.max": "Note content cannot be more than {#limit} characters",
      "any.required": "Note content is required",
    }),
});

// const deleteNoteSchema = Joi.object({
//   text: Joi.string().min(1).max(255).required(),
// });

module.exports = {
  createNoteSchema
}