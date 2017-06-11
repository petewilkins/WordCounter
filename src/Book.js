'use strict';

function Book(text) {
  this.text = text;
  this.glossary = [];
  this.wordCounter = {};
  this.wordsSorted = [];
}

Book.prototype.getText = function () {
  return this.text = this.text.toLowerCase();
};

Book.prototype.splitText = function () {
  return this.text.match(/(\b[^\s]+\b)/g);
};

Book.prototype.countOccurences = function () {
  var splitText = this.splitText();

  for (var i = 0; i < splitText.length; i++) {
    var word = splitText[i];
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
  var wordCounter = this.wordCounter;

  this.glossary.sort(function (a, b) {
    var wordCountA = wordCounter[a];
    var wordCountB = wordCounter[b];
    return wordCountB - wordCountA;
  });

  return this.glossary;
};

Book.prototype.printResults = function () {
  for (var i = 0; i < this.glossary.length; i++) {
    var word = this.glossary[i];
    this.wordsSorted.push(word + ' ' + this.wordCounter[word]);
  }

  return this.wordsSorted;
};
