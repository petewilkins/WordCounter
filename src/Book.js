'use strict';

function Book(text) {
  this.text = text;
}

Book.prototype.getText = function () {
  return this.text;
};

Book.prototype.splitText = function () {
  // return this.text.split(' ');
  return this.text.match(/(\b[^\s]+\b)/g);
};
