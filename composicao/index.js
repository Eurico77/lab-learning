function composing(...fns) {
  return function (value) {
    return fns.reduce(function (acc, fn) {
      console.log(fn);
      return fn(acc);
    }, value);
  };
}

function addition(x) {
  return x + 1;
}
function multiplication(x) {
  return x * 2;
}
function division(x) {
  return x / 2;
}

const operations = composing(addition, multiplication, division);

console.log(operations(10)); //11
console.log(operations(20)); //21


