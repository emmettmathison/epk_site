var path = require("path");

module.exports = function (app) {
  app.get("/hi", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/EPK2.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/html/main.html"));
  });
};
