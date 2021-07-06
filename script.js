//**** FINAL OUTPUT: ****//
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim

    // STEP 1:
    // Wrap the entire contents of script.js inside of an IIFE
    // See Lecture 52, part 2
    // (Note, Step 2 will be done in the SpeakHello.js file.) 
// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1 
/* fill in parts of the 'for' loop to loop over names array */
//

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstLetter = names[i].charAt(0).toLowerCase(); //this throws an error saying charAt is undefined
  for (var i = 0; i < names.length; i++) {
    var firstLetter = String(names).charAt(0);
    if (firstLetter === 'j') { //check if the name starts with a 'J'
      names.charAt().toLowerCase(); //return names with J to lowercase
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
// byeSpeaker(); //call the byeSpeaker function
// helloSpeaker(); //call the helloSpeaker function
// STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  // var firstLetter =
// for (var i = 0; i < names.length; i++) {
//   var firstLetter = names.charAt();
//   if (firstLetter = "J") {
//     names.toLowerCase();
//     return byeSpeaker.speak();
//   } else {
//     return  helloSpeaker.speak();
//   }
// }

    // STEP 12:
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.