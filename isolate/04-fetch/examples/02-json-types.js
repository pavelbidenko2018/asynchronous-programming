'use strict';


/* JSON Types

  JSON is a data format used all the time in web development
    Most API requests and responses use JSON

  JSON stands for JavaScript Object Notation
  it looks a lot like, well, JavaScript objects

  It has fewer types than JavaScript, all of them are listed in this example

*/


const log = labeledLogger('JSON Types');

const origin = window.location.origin;
<<<<<<< HEAD
const path = '/isolate/fake-api/json-types.json';
=======
const path = '/asynchronous-programming/isolate/04-fetch/fake-api/json-types.json';
>>>>>>> 02-fetch integrate
const requestURL = origin + path;
log("requestURL: ", requestURL);


const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};
const logData = (data) => {
  log('data:', data);
};
const handleRejection = (err) => {
  log(err);
};



fetch(requestURL)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => logData(data))
  .catch(err => handleRejection(err));
=======
  .then(parseResponse)
  .then(logData)
  .catch(handleRejection);
>>>>>>> 02-fetch integrate



log('end of synchronous tasks');
