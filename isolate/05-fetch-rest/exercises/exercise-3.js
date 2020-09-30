'use strict';


const log = labeledLogger('Exercise 3');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
<<<<<<< HEAD
const path = _;
=======
const path = '/albums?userId=9&_limit=10';
>>>>>>> 02-fetch integrate
log('path: ', path);


const parseResponse = (response) => {
<<<<<<< HEAD
  log('response: ', response);
  return response.json();
};

const testData = (actual) => {
  log('actual: ', actual);
  it('should have 10 albums', () => {
    expect(actual.length).to.equal(10);
  });
  it('should all have userId 9', () => {
    const allHaveUserId9 = actual.every(album => album.userId === 9);
    expect(allHaveUserId9).to.be.true;
  });
};

const handleRejection = (err) => {
  log(err);
=======
    log('response: ', response);
    return response.json();
};

const testData = (actual) => {
    log('actual: ', actual);
    it('should have 10 albums', () => {
        expect(actual.length).to.equal(10);
    });
    it('should all have userId 9', () => {
        const allHaveUserId9 = actual.every(album => album.userId === 9);
        expect(allHaveUserId9).to.be.true;
    });
};

const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};



fetch(origin + path)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => testData(data))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');
=======
    .then(parseResponse)
    .then(testData)
    .catch(handleRejection);



log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
