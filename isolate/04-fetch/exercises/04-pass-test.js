'use strict';


const log = labeledLogger('4. Pass Test');
const expect = chai.expect;

const origin = window.location.origin;
<<<<<<< HEAD
const path = _;
=======
const path = '/isolate/04-fetch/fake-api/food/wet/mush.json';
>>>>>>> 02-fetch integrate
const requestURL = origin + path;
log("requestURL: ", requestURL);



const parseResponse = (response) => {
<<<<<<< HEAD
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};

const filterMushes = (mushes) => {
  // write me!
};

const testFilteredMushes = (trueMush) => {
  log('trueMush: ', trueMush);
  it('these mush are true', () => {
    expect(trueMush).to.deep.equal(['grey', 'orange']);
  });
};

const handleRejection = (err) => {
  log(err);
=======
    const parsedResponse = response.json();
    log('response: ', response, '\n',
        'parsed: ', parsedResponse);
    return parsedResponse;
};

const filterMushes = (mushes) => {
    // write me!
    const filteredMushes = [];
    for (let item in mushes) {
        if (mushes[item] == true)
            filteredMushes.push(item);
    }
    return filteredMushes;
};

const testFilteredMushes = (trueMush) => {
    log('trueMush: ', trueMush);
    it('these mush are true', () => {
        expect(trueMush).to.deep.equal(['grey', 'orange']);
    });
};

const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};


// careful, this might not be right
fetch(requestURL)
<<<<<<< HEAD
  .then(res => parseResponse(res))
  .then(filteredData => testFilteredMushes(filteredData))
  .then(data => filterMushes(data))
  .catch(err => handleRejection(err));
=======
    .then(parseResponse)
    .then(filterMushes)
    .then(testFilteredMushes)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate





<<<<<<< HEAD
log('end of synchronous tasks');


=======


log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
