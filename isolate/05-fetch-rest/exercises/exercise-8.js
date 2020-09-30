'use strict';


const log = labeledLogger('Exercise 8');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
<<<<<<< HEAD
const path = _;
=======
const path = '/albums?userId=1&_limit=10';
>>>>>>> 02-fetch integrate
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
    return data.map(element => { return { id: element.id, userId: element.userId } });
>>>>>>> 02-fetch integrate


};

const testData = (actual) => {
<<<<<<< HEAD
  log('actual: ', actual);

  it('should have 10 albums', () => {
    expect(actual.length).to.equal(10);
  });
  it('all have userId 1', () => {
    const allHaveUserId1 = actual.every(album => album.userId === 1);
    expect(allHaveUserId1).to.be.true;
  });
  for (let i = 0; i < actual.length; i++) {
    const album = actual[i];
    it(`album ${i} has the correct keys`, () => {
      const albumKeys = Object.keys(album);
      expect(albumKeys).to.have.members(['id', 'userId']);
    });
  };
};

const handleRejection = (err) => {
  log(err);
=======
    log('actual: ', actual);

    it('should have 10 albums', () => {
        expect(actual.length).to.equal(10);
    });
    it('all have userId 1', () => {
        const allHaveUserId1 = actual.every(album => album.userId === 1);
        expect(allHaveUserId1).to.be.true;
    });
    for (let i = 0; i < actual.length; i++) {
        const album = actual[i];
        it(`album ${i} has the correct keys`, () => {
            const albumKeys = Object.keys(album);
            expect(albumKeys).to.have.members(['id', 'userId']);
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
