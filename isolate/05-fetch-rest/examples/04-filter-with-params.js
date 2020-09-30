'use strict';


/* Related Resources

  You can select data based on it's relationships

  for example:
    all posts made by user 3

*/


const log = labeledLogger('4. Filter with Params');
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


const usernameSamantha = '/users?username=Samantha';
const logUsernameSamantha = logData(usernameSamantha);
fetch(origin + usernameSamantha)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logUsernameSamantha(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logUsernameSamantha)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate



const postsTitle = '/posts?title=qui%20est%20esse';
const logPostsTitle = logData(postsTitle);
fetch(origin + postsTitle)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logPostsTitle(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logPostsTitle)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate


const postsId1Id2 = '/posts?id=1&id=2';
const logPostsId1Id2 = logData(postsId1Id2);
fetch(origin + postsId1Id2)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logPostsId1Id2(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logPostsId1Id2)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate






log('end of synchronous tasks');
