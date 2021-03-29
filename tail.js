const assertEqual = function (actual, expected){
  if (actual === expected){
    console.log(`Assertion Passed   ${actual}   ===   ${expected}`);
  }
  else {console.log(actual + " !=== " + expected) }
};
 
const tail = function(array){
  let tail = [];
  for (let i = 1; i < array.length ; i++ ){
    tail.push(array[i]);
  }
return tail;
;}


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
