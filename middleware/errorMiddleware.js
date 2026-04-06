// Global error handler
exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // 🔥 Handle invalid MongoDB ObjectId
  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
  }

  // 🔥 Clean Joi messages (remove quotes)
  if (message.includes('"')) {
    message = message.replace(/"/g, '');
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};