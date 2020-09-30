'use strict';


const log = labeledLogger('Exercise 7');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = '/users';
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

    return data.map(element => {
        return {
            id: element.id,
            name: element.name,
            userName: element.userName
        }
    });
>>>>>>> 02-fetch integrate

};

const testData = (actual) => {
<<<<<<< HEAD
  log('actual: ', actual);

  it('should have 10 users', () => {
    expect(actual.length).to.equal(10);
  });
  for (let i = 0; i < actual.length; i++) {
    const user = actual[i];
    it(`user ${i} has the correct keys`, () => {
      const userKeys = Object.keys(user);
      expect(userKeys).to.have.members(['id', 'name', 'userName']);
    });
  };
};

const handleRejection = (err) => {
  log(err);
=======
    log('actual: ', actual);

    it('should have 10 users', () => {
        expect(actual.length).to.equal(10);
    });
    for (let i = 0; i < actual.length; i++) {
        const user = actual[i];
        it(`user ${i} has the correct keys`, () => {
            const userKeys = Object.keys(user);
            expect(userKeys).to.have.members(['id', 'name', 'userName']);
        });
    };
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
