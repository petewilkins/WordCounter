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

    if (this.numIsPrime(this.wordCounter[word])) {
      this.wordsSorted.push(word + ' - ' + this.wordCounter[word] + ' prime');
    } else {
      this.wordsSorted.push(word + ' - ' + this.wordCounter[word]);
    }
  }

  return this.wordsSorted;
};

Book.prototype.numIsPrime = function (number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }

  return number > 1;
};

Book.prototype.analyse = function () {
  this.getText();
  this.countOccurences();
  this.sortOccurences();
  return console.log(this.printResults());
};

var fs = require('fs');
var inputFile = process.argv[2];

if (fs.existsSync(inputFile)) {
  var textFromBook = fs.readFileSync(inputFile, 'utf8');
  var book = new Book(textFromBook);
  book.analyse();
} else {
  console.log('Text file argument incorrect. Suggested use: npm start books/the-railway-children.txt');
}
