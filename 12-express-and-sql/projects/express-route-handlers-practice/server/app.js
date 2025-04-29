// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// Get all artists
app.get('/artists', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  res.send(getAllArtists());
});

// Add a new artist
app.post('/artists', (req, res) => {
  res.statusCode = 201;
  res.header('Content-Type', 'application/json');

  const artist = addArtist(req.body);
  res.send(artist);
});

// Get a specific artist's details based on artistId
app.get('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const artist = getArtistByArtistId(artistId);

  res.send(artist);
});

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const data = req.body;
  const artist = editAlbumByAlbumId(artistId, data);

  res.send(artist);
});

app.post('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const data = req.body;
  const artist = editAlbumByAlbumId(artistId, data);

  res.send(artist);
});

// Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const artists = deleteArtistByArtistId(artistId);

  const message = {
    'data': artists,
    'message': 'Successfully deleted',
  };

  res.send(message);
});

// Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;

  res.send(getAlbumByAlbumId(artistId));
});

// Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;

  res.send(getAlbumByAlbumId(albumId));
});

// Add an album to a specific artist based on artistId
app.get('/artist/:artistId/albums', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const data = req.body;

  res.send(addAlbumByArtistId(artistId, data));
});

// Edit a specified album by albumId
app.put('/albums/:albumId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const data = req.body;

  res.send(editAlbumByAlbumId(albumId, data));
});

// Delete a specified album by albumId
app.delete('/albums/:albumId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const albums = deleteAlbumByAlbumId(albumId);

  const message = {
    'data': albums,
    'message': 'Successfully deleted',
  };

  res.send(message);
});

// Get all albums with names filtered by first letter
app.get('/albums?startsWith=', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const startsWith = req.query.startsWith;

  res.send(getFilteredAlbums(startsWith));
});

// Get all songs of a specific artist based on artistId
app.get('/artists/:artistId/songs', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;

  res.send(getSongsByArtistId(artistId));
});

// Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;

  res.send(getSongsByAlbumId(albumId));
});

// Get a specific song's details based on songId
app.get('/songs/:songId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const songId = req.params.songId;

  res.send(getSongBySongId(songId));
});

// Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res) => {
  res.statusCode = 201;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const data = req.body;

  res.send(addSongByAlbumId(albumId, data));
});

// Edit a specified song by songId
app.path('/songs/:songId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const songId = req.params.songId;
  const data = req.body;

  res.send(editSongBySongId(songId, data));
});

// Delete a specified song by songId
app.get('/songs/:songId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const songId = req.params.songId;
  const songs = deleteSongBySongId(songId);

  const message = {
    'data': songs,
    'message': 'Successfully deleted',
  };

  res.send(message);
});

app.get('/', (req, res) => {
  res.send('Hello!');
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
