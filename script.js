(function () {
  names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.charAt(0).toLowerCase() === 'j') { //check if the name starts with a 'J'
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();