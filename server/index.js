// const path = require("path");
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../ftf/build")));

// // Handle GET requests to /api route (endpoint)
// app.get("/api", (req, res) => {
// res.json({ message: "Bonjour depuis votre server!" });
// });

// // All other GET requests not handled will return our React app
// app.get("*", (req, res) => {
// res.sendFile(path.resolve(__dirname, "../ftf/build", "index.html"));
// });

// app.listen(PORT, () => {
// console.log(`Server listening on ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use('/', require(path.join(__dirname, "routes/stats")));
app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});
app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});