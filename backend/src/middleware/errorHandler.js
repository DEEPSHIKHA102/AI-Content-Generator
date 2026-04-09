const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.message.includes('401') || err.message.includes('Unauthorized')) {
    return res.status(401).json({
      error: 'Invalid API key or authentication failed',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }

  if (err.message.includes('404')) {
    return res.status(404).json({
      error: 'Resource not found',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
  }

  res.status(500).json({
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
};

module.exports = errorHandler;
