'use strict';


// which data entry has 5 entries?


const log = labeledLogger('5. Pass Test');
const expect = chai.expect;

const origin = window.location.origin;
<<<<<<< HEAD
const path = _;
const requestURL = origin + path;
log("requestURL: ", requestURL);




const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};

const lengthOfData = (data) => {
  // write me!
};

const testDataLength = (dataLength) => {
  log('dataLength: ', dataLength);
  it('data should have length 5', () => {
    expect(dataLength).to.equal(5);
  });
};

const handleRejection = (err) => {
  log(err);
=======
const path = '/isolate/04-fetch/fake-api/food/dry/grains.json';
const requestURL = origin + path;
log("requestURL: ", requestURL);

const parseResponse = (response) => {
    const parsedResponse = response.json();
    log('response: ', response, '\n',
        'parsed: ', parsedResponse);
    return parsedResponse;
};

const lengthOfData = (data) => {
    let length = Object.keys(data).length;

    console.log('Number of entries: ' + Object.keys(data).length);

    return length;
};

const testDataLength = (dataLength) => {
    log('dataLength: ', dataLength);
    it('data should have length 5', () => {
        expect(dataLength).to.equal(5);
    });
};

const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};


fetch(requestURL)
<<<<<<< HEAD
  .then(_)
  .then(_)
  .then(_)
  .catch(_);





log('end of synchronous tasks');


=======
    .then(parseResponse)
    .then(lengthOfData)
    .then(testDataLength)
    .catch(handleRejection);

log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
