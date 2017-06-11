'use strict';

function Book(text) {
  this.text = text;
  this.allWords = [];
  this.glossary = [];
  this.wordCounter = {};
  this.sortedResult = [];
}

Book.prototype.getText = function () {
  return this.text = this.text.toLowerCase();
};

Book.prototype.splitText = function () {
  this.allWords = this.text.match(/(\b[^\s]+\b)/g);
  return this.allWords;
};

Book.prototype.countOccurences = function () {
  for (var i = 0; i < this.allWords.length; i++) {
    var word = this.allWords[i];
    if (this.wordCounter.hasOwnProperty(word)) {
      this.wordCounter[word] += 1;
    } else {
      this.wordCounter[word] = 1;
      this.glossary.push(word);
    }
  }

  return this.wordCounter;
};

Book.prototype.sortOccurences = function () {
  for (var i = 0; i < this.glossary.length; i++) {
    var word = this.glossary[i];
    this.sortedResult.push(word + ' ' + this.wordCounter[word]);
  }

  return this.sortedResult;
};
