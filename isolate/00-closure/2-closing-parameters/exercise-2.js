'use strict';

const closeIt = (parentParam) => {
<<<<<<< HEAD
  return (ownParam) => {
    return ownParam + parentParam;
  }
=======
    return (ownParam) => {
        return ownParam + parentParam;
    }
>>>>>>> 02-fetch integrate
}

const closure1 = closeIt(3);
const closure2 = closeIt("3");

const result1 = closure1(8);
const result2 = closure2(8);
<<<<<<< HEAD
console.assert(result1 === _, "result 1")
console.assert(result2 === _, "result 2")

const result3 = closure1(true);
const result4 = closure2(true);
console.assert(result3 === _, "result 3")
console.assert(result4 === _, "result 4")

const result5 = closure1(_);
const result6 = closure2(_);
console.assert(result5 === result6, "results 5 & 6");
=======
console.assert(result1 === 11, "result 1")
console.assert(result2 === '83', "result 2")

const result3 = closure1(true);
const result4 = closure2(true);
console.assert(result3 === 4, "result 3")
console.assert(result4 === 'true3', "result 4")

const result5 = closure1('');
const result6 = closure2('');
console.assert(result5 === result6, "results 5 & 6");
>>>>>>> 02-fetch integrate
