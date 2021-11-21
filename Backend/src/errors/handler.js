function message(error, message) {
  return { message, intance: error.constructor.name, error: error.message };
}

module.exports = (error, req, res, next) => {
  if (error.constructor.name == "QueryFailedError") return res.status(400).json(message(error, "Query error"));

  if (error.constructor.name == "UnauthorizedError") return res.status(401).json(message(error, "Unauthorized error"));

  return res.status(500).json(message(error, "Internal server error"));
};
