const assertEqual = function (actual, expected){
  if (actual === expected){
    console.log(`Assertion Passed   ${actual}   ===   ${expected}`);
  }
  else {console.log(actual + " !=== " + expected) }
};

const head = function(array){
  return array[0];
}

assertEqual(head([5,6,7]), 5);
console.log(assertEqual)
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(assertEqual)

