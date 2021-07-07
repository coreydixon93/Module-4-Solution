(function () {
  speakWord = "Good Bye";
  byeSpeaker = new Object(); 
  byeSpeaker.speak = function () {
    return speakWord;
    }
})();


// (function byeSpeaker() {
//   var byeSpeaker = new byeSpeaker();{
//     function speak(name) { //method
//       console.log(speakWord + " " + names[i]); // How do I pass the names array from script.js?
//     }
//     this.speak = speak;
//   }
// })();
// byeSpeaker.speak = byeSpeaker;