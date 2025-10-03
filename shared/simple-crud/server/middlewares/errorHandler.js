// middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error("🔥 Server Error:", err);

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  // Handle Joi validation errors
  if (err.isJoi) {
    return res.status(400).json({
      error: "Validation Error",
      message: error.message,
      details: err.details.map((d) => d.message),
    });
  }

  // Handle Prisma errors (simplified)
  if (err.code && err.clientVersion) {
    return res.status(400).json({
      error: "Database Error",
      details: err.meta || message,
    });
  }

  // Default
  res.status(statusCode).json({ error: message });
}
module.exports = {
    errorHandler
}