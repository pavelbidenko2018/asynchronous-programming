'use strict';

const log = labeledLogger('exercise 2');

// fill in the blanks

let x = '';


<<<<<<< HEAD
x += _;

const exercise2_cb_1 = () => {
  x += _;
  log('cb 1:', x);
};
setTimeout(exercise2_cb_1, 100);

x += _;

const exercise2_cb_2 = () => {
  x += _;
  log('cb 2:', x);
=======
x += 'ja';

const exercise2_cb_1 = () => {
    x += 'sc';
    log('cb 1:', x);
};
setTimeout(exercise2_cb_1, 100);

x += 'va';

const exercise2_cb_2 = () => {
    x += 'pt';
    log('cb 2:', x);
>>>>>>> 02-fetch integrate
};
setTimeout(exercise2_cb_2, 300);

const exercise2_cb_3 = () => {
<<<<<<< HEAD
  const test = x === 'javascript';
  log('cb 3:', test);
  console.assert(test, 'x should be "javascript"');
=======
    const test = x === 'javascript';
    log('cb 3:', test);
    console.assert(test, 'x should be "javascript"');
>>>>>>> 02-fetch integrate
};
setTimeout(exercise2_cb_3, 500);

const exercise2_cb_4 = () => {
<<<<<<< HEAD
  x += _;
  log('cb 4:', x);
};
setTimeout(exercise2_cb_4, 200);

x += _;

log(x);
=======
    x += 'ri';
    log('cb 4:', x);
};
setTimeout(exercise2_cb_4, 200);

x += '';

log(x);
>>>>>>> 02-fetch integrate
