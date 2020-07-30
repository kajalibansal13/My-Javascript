function filterOddLengthWords(words) {
  // your code here
  let oddArray = [];
  for (let i = 0;i < words.length ;i++) {
          if ((words[i].length % 2) !== 0) {
             oddArray.push((words[i]));
          }
          else {
              continue;
          }
      
  }
  return oddArray;
}
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']