function controller(req, res, next) {
  res.render("index", { messages: res.locals.messages });
}

module.exports = controller;
