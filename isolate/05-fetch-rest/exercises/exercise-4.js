'use strict';


const log = labeledLogger('Exercise 4');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = '/posts';
log('path: ', path);


const parseResponse = (response) => {
<<<<<<< HEAD
  log('response: ', response);
  return response.json();
};

const processData = (data) => {
  log('data: ', data);
  // write the rest ...
=======
    log('response: ', response);
    return response.json();
};

const processData = (data) => {
    log('data: ', data);
    // write the rest ...

    const res = data.filter((item, idx) => item.body.includes('magnam'));
    return res.slice(0, 14);
>>>>>>> 02-fetch integrate

};

const testData = (actual) => {
<<<<<<< HEAD
  log('actual: ', actual);

  it('should have 14 posts', () => {
    expect(actual.length).to.equal(14);
  });
  it('all bodies should include "magnam"', () => {
    const allHaveMagnam = actual.every(post => post.body.includes('magnam'));
    expect(allHaveMagnam).to.be.true;
  });
};

const handleRejection = (err) => {
  log(err);
=======
    log('actual: ', actual);

    it('should have 14 posts', () => {
        expect(actual.length).to.equal(14);
    });
    it('all bodies should include "magnam"', () => {
        const allHaveMagnam = actual.every(post => post.body.includes('magnam'));
        expect(allHaveMagnam).to.be.true;
    });
};

const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};



fetch(origin + path)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(data => processData(data))
  .then(processedData => testData(processedData))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');
=======
    .then(parseResponse)
    .then(processData)
    .then(testData)
    .catch(handleRejection);



log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
