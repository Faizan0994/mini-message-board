const indexRouter = require("../routes/index");
const messages = indexRouter.messages;

function form(req, res, next) {
  res.render("new-message");
}

function handleData(req, res, next) {
  const user = req.body.user;
  const message = req.body.message;
  const entry = { user: user, text: message, added: new Date() };
  messages.push(entry);
  res.redirect("/");
}

module.exports = { form, handleData };
