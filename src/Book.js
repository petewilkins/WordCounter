'use strict';

function Book(text) {
  this.text = text;
}

Book.prototype.getText = function () {
  return this.text;
};
