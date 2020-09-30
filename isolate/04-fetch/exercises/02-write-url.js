'use strict';


const log = labeledLogger('2. Write URL');
const expect = chai.expect;

const origin = window.location.origin;
<<<<<<< HEAD
const path = _;
=======
const path = '/isolate/04-fetch/fake-api/food/dry/nuts.json';
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

const separateBrazilNut = (nuts) => {
  log('nuts:', nuts);
  return nuts[1];
};

const testNut = (brazilNut) => {
  log('brazilNut: ', brazilNut);
  it('this one is also a country', () => {
    expect(brazilNut).to.equal('brazil');
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

const separateBrazilNut = (nuts) => {
    log('nuts:', nuts);
    return nuts[1];
};

const testNut = (brazilNut) => {
    log('brazilNut: ', brazilNut);
    it('this one is also a country', () => {
        expect(brazilNut).to.equal('brazil');
    });
};

const handleRejection = (err) => {
    log(err);
>>>>>>> 02-fetch integrate
};


// careful, these might not be right
fetch(requestURL)
<<<<<<< HEAD
  .then(parseResponse())
  .then(separateBrazilNut())
  .then(testNut())
  .catch(handleRejection());
=======
    .then(parseResponse)
    .then(separateBrazilNut)
    .then(testNut)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate





<<<<<<< HEAD
log('end of synchronous tasks');


=======
log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
