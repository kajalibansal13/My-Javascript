var obj = {
  key: [1000, 20, 50, 500]
};
function getElementsLessThan100AtProperty(obj, key) {
    var outputArray = [];
  // your code here
  
  if (obj[key] === undefined) {
      return [];
  }
  if (obj[key].length === 0) {
      return [];
  }
  if (Array.isArray(obj[key]) === false) {
      return [];
  }
  for (var i = 0; i < obj[key].length; i++) {
      if(obj[key][i] < 100) {
          outputArray.push(obj[key][i]);
      }
      
  }
  return outputArray;
}
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]