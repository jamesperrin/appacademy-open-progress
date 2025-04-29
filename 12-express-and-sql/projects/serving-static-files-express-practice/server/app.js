const express = require('express');
const app = express();
const path = require('path');

// Exposes the entire assets folder
// app.use('/', express.static(path.join(__dirname, 'assets')));
// app.use(express.static('assets'));

/*
  Task Part 1:
  In your server folder, there is a folder called assets that holds CSS stylesheets, images, and JavaScript scripts. Serve all the files in the assets folder so that if you append the relative file path to the end of the root URL of the server, it will send the file to the client.
*/
app.use(express.static('assets'));

/*
  Task Part 2: Serve only the files in the `assets/scripts` folder at the root URL.
*/
app.use('/scripts', express.static(path.join(__dirname, 'assets', 'scripts')));

/*
  Task Part 3: Serve the files in the assets/css folder under a route resource called stylesheets.
*/
app.use('/styles', express.static(path.join(__dirname, 'assets', 'css')));



const port = 5000;
app.listen(port, () =>
  console.log('Server is listening on port', `http://localhost:${port}`),
);
