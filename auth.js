module.exports.session = (req, res, next) => {
  req.user = null;
  next();
};
