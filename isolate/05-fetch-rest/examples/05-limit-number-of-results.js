'use strict';


/* Limit Number of Results

  you can limit the number of results using _limit=X

*/


const log = labeledLogger('5. Limit Number of Results');
const origin = 'https://jsonplaceholder.typicode.com';


const parseResponse = (response) => {
<<<<<<< HEAD
  return response.json();
};
const logData = (logMessage) => {
  return (data) => {
    log(logMessage, data);
  };
};
const handleRejection = (err) => {
  log(err);
=======
    return response.json();
};
const logData = (logMessage) => {
    return (data) => {
        log(logMessage, data);
    };
};
const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};


const threeUsers = '/users?_limit=3';
const logThreeUsers = logData(threeUsers);
fetch(origin + threeUsers)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logThreeUsers(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(logThreeUsers)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate

const fiveUsers = '/users?_limit=5';
const logFiveUsers = logData(fiveUsers);
fetch(origin + fiveUsers)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logFiveUsers(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(logFiveUsers)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate



const sixPostsByUser3 = '/users/3/posts?_limit=6';
const logSixPostsByUser3 = logData(sixPostsByUser3);
fetch(origin + sixPostsByUser3)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logSixPostsByUser3(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(logSixPostsByUser3)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate



const twoPhotosFromAlbum6 = '/albums/6/photos?_limit=2';
const logTwoPhotosFromAlbum6 = logData(twoPhotosFromAlbum6);
fetch(origin + twoPhotosFromAlbum6)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logTwoPhotosFromAlbum6(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(logTwoPhotosFromAlbum6)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate

const fivePhotosFromAlbum1 = '/photos?albumId=1&_limit=5';
const logFivePhotosFromAlbum1 = logData(fivePhotosFromAlbum1);
fetch(origin + fivePhotosFromAlbum1)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logFivePhotosFromAlbum1(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(logFivePhotosFromAlbum1)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate








<<<<<<< HEAD
log('end of synchronous tasks');
=======
log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
