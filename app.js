// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = 'Hello World, How are you?';
let speakButton = document.querySelector('#main');

// Arrays to hold the random words
let subjects = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let objects = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the tree", "in my shoes"];

// Variable to build the sentence
let story = "";

// Get random index for each array
let getRandomIndex = array => {
return Math.floor(Math.random() * array.length);
}

// Button click handlers

// Button 1 getting a random  word from the subjects array and adding it to the story
document.querySelector(".button-1").onclick = () => {
  let randomSubject = subjects[getRandomIndex(subjects)];
  story += randomSubject + " ";
}

// Button 2 getting a random  word from the subjects array and adding it to the story
document.querySelector(".button-2").onclick = () => {
  let randomVerb = verbs[getRandomIndex(verbs)];
  story += randomVerb + " ";
}

// Button 3 getting a random  word from the subjects array and adding it to the story
document.querySelector(".button-3").onclick = () => {
  let randomAdjective = adjectives[getRandomIndex(adjectives)];
  story += randomAdjective + " ";
}

// Button 4 getting a random  word from the subjects array and adding it to the story
document.querySelector(".button-4").onclick = () => {
  let randomObject = objects[getRandomIndex(objects)];
  story += randomObject + " ";
}

// Button 5 getting a random  word from the subjects array and adding it to the story
document.querySelector(".button-5").onclick = () => {
  let randomPlace = places[getRandomIndex(places)];
  story += randomPlace + " ";
}

// Reset letton event listener
document.querySelector("#reset").onclick = () => {
  story = "";
}

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(story);
}
