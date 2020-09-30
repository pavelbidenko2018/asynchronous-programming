'use strict';

const log = labeledLogger('1. Write URL');
const expect = chai.expect;

const origin = window.location.origin;
<<<<<<< HEAD
const path = _;
=======
const path = '/isolate/04-fetch/fake-api/json-types.json';
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

const separateStrings = (jsonTypes) => {
  log('JSON Types:', jsonTypes);
  return jsonTypes.strings;
};

const testStrings = (strings) => {
  log('strings: ', strings);
  it('should be the strings from json-types.json', () => {
    expect(strings).to.deep.equal([
      "only double quotes!",
      "there is no 'undefined' in JSON",
      ""
    ]);
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

const separateStrings = (jsonTypes) => {
    log('JSON Types:', jsonTypes);
    return jsonTypes.strings;
};

const testStrings = (strings) => {
    log('strings: ', strings);
    it('should be the strings from json-types.json', () => {
        expect(strings).to.deep.equal([
            "only double quotes!",
            "there is no 'undefined' in JSON",
            ""
        ]);
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
=======
    .then(parseResponse)
    .then(separateStrings)
    .then(testStrings)
    .catch(handleRejection);
>>>>>>> 02-fetch integrate





<<<<<<< HEAD
log('end of synchronous tasks');


=======
log('end of synchronous tasks');
>>>>>>> 02-fetch integrate
