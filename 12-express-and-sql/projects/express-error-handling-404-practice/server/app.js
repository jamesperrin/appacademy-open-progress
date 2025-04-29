const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// Task 1: "Resource Not Found" middleware for handling 404 (Not Found)
app.use((req, res, next) => {
  // Create a new error with the message for 404
  const error = new Error("Sorry, the requested resource couldn't be found.");
  error.status = 404;

  // Pass the error to the next middleware (error handler)
  next(error);
});

// Task 2: Catch-all errors middleware (error-handling middleware)
app.use((err, req, res, next) => {
  // If the error doesn't have a status code, default to 500
  const status = err.status || 500;

  const responseMessage = {
    'message': err.message || 'Something went wrong',
    'statusCode': status,
  };

  // Set response status and send error message
  res.status(status).send(responseMessage);

  // Log the error stack trace to the console
  console.error(err.stack);
});

const port = 5000;
app.listen(port, () =>
  console.log('Server is listening on port', `http://localhost:${port}`),
);
