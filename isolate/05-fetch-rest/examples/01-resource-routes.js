'use strict';


/* Resource Routes

  in RESTful routes, each resource type has it's own route

*/


const log = labeledLogger('1. Resource Routes');
const origin = 'https://jsonplaceholder.typicode.com';


const parseResponse = (response) => {
  return response.json();
};
const logData = (logMessage) => {
  return (data) => {
    log(logMessage, data);
  };
};
const handleRejection = (err) => {
  log(err);
};


const albumsPath = '/albums';
const logAlbums = logData(albumsPath);
fetch(origin + albumsPath)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logAlbums(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logAlbums)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate


const postsPath = '/posts';
const logPosts = logData(postsPath);
fetch(origin + postsPath)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logPosts(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logPosts)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate


const usersPath = '/users';
const logUsers = logData(usersPath);
fetch(origin + usersPath)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logUsers(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logUsers)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate



log('end of synchronous tasks');
