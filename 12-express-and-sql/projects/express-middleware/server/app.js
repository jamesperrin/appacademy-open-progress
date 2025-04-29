const express = require('express');
const app = express();

// // create a function `logTime` invoking the arguments `req`, `res`, `next`
// const logTime = (req, res, next) => {
//   // have your function log the "Current time: " string with the Date function
//   // to an ISO string
//   console.log('Current time: ', new Date().toISOString());
//   // Since no response has been returned yet invoke the `next` function so it
//   // knows to move on to the next middleware function
//   next();
// };

const logTime = (req, res, next) => {
  console.log("Current time: ", new Date().toISOString());
  next();
};

// `app.use(logTime)` an application-level middleware- invoked everytime the app recieves a request.
app.use(logTime);

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

app.get("/", [passOnMessage], (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});

app.get("/bye", (req, res) => {
  console.log("--");
  console.log("-- Bye World");
  res.send("Bye World.");
});

// Set port and listener
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log(`Server is listening on http:\\localhost:${port}`));
} else {
  module.exports = app;
}
