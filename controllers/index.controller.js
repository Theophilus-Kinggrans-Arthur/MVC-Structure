const welcome = (req, res) => {
  res.send("<h1>Login Sucessful!</h1>");
};

const greet = (req, res) => {
  res.send("<h1>Hi 🙋‍♀️, AM COMING🚲</h1>");
};

module.exports = {
  welcome,
  greet,
};
