module.exports = (error, _req, res, _next) => {
  if (!error.status) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message });
  }
  
  const { message, status } = error;

  return res.status(status).json({ status, message })
};
