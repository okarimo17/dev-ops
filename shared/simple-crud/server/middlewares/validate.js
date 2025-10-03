
const validate= (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        errors: error.details.map((d) => d.message),
        message : error.message
      });
    }
    next();
  };
};

module.exports =  {validate}