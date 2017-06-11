'use strict';

function Book(text) {
  this.text = text;
  this.glossary = [];
}

Book.prototype.getText = function () {
  return this.text = this.text.toLowerCase();
};

Book.prototype.splitText = function () {
  this.glossary = this.text.match(/(\b[^\s]+\b)/g);
  return this.glossary;
};

Book.prototype.countOccurences = function () {
  var wordCounter = {};

  for (var i = 0; i < this.glossary.length; i++) {
    var word = this.glossary[i];
    if (wordCounter.hasOwnProperty(word)) {
      wordCounter[word] += 1;
    } else {
      wordCounter[word] = 1;
    }
  }

  return wordCounter;
};
