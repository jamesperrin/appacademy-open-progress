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
app.use(express.json());

// Your code here
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// ==================================
// Phase 1
// ==================================

// Get all the artists
app.use('/artists', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const allArtists = getAllArtists();

  res.send(allArtists);
});

// Get all latest artists
app.use('/artists/latest', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const latestArtist = getLatestArtist();

  res.send(latestArtist);
});

// Get all latest artists albums
app.use('/artists/latest/albums', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumsForLatestArtist = getAlbumsForLatestArtist();

  res.send(albumsForLatestArtist);
});

// Add an artist
app.post('/artists', (req, res) => {
  res.statusCode = 201;
  res.header('Content-Type', 'application/json');

  const artist = addArtist(req.body);
  res.send(artist);
});

// Edit a specified artist by artistId
app.post('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const data = req.body;
  const artist = editAlbumByAlbumId(artistId, data);

  res.send(artist);
});

// ==================================
// Phase 2
// ==================================

// Get a specific artist's details based on artistId
app.get('/artists/:artistId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const artist = getArtistByArtistId(artistId);

  res.send(artist);
});

// Edit a specified artist by artistId
app.patch('/artists/:artistId', (req, res) => {
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
  const artist = getAlbumByAlbumId(artistId);

  res.send(artist);
});

// Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const album = getAlbumByAlbumId(albumId);

  res.send(album);
});

// Add an album to a specific artist based on artistId
app.post('/artist/:artistId/albums', (req, res) => {
  res.statusCode = 201;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const data = req.body;
  const album = addAlbumByArtistId(artistId, data);

  res.send(album);
});

// Edit a specified album by albumId
app.patch('/albums/:albumId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const data = req.body;
  const album = editAlbumByAlbumId(albumId, data);

  res.send(album);
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
  const album = getFilteredAlbums(startsWith);

  res.send(album);
});

// Get all songs of a specific artist based on artistId
app.get('/artists/:artistId/songs', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const artistId = req.params.artistId;
  const songs = getSongsByArtistId(artistId);

  res.send(songs);
});

// Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const songs = getSongsByAlbumId(albumId);

  res.send(songs);
});

// Get a specific song's details based on songId
app.get('/songs/:songId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const songId = req.params.songId;
  const songs = getSongBySongId(songId);

  res.send(songs);
});

// Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res) => {
  res.statusCode = 201;
  res.header('Content-Type', 'application/json');

  const albumId = req.params.albumId;
  const data = req.body;
  const song = addSongByAlbumId(albumId, data);

  res.send(song);
});

// Edit a specified song by songId
app.patch('/songs/:songId', (req, res) => {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json');

  const songId = req.params.songId;
  const data = req.body;
  const song = editSongBySongId(songId, data);

  res.send(song);
});

// Delete a specified song by songId
app.delete('/songs/:songId', (req, res) => {
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

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
