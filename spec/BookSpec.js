describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book("This isn't a story, just a string!");
  });

  describe('getText', function () {
    it('returns the book text in lowercase', function () {
      expect(book.getText()).toEqual("this isn't a story, just a string!");
    });
  });

  describe('splitText', function () {
    it('splits input text into an array of words ignoring punctuation', function () {
      book.getText();
      expect(book.splitText()).toEqual(['this', "isn't", 'a', 'story', 'just', 'a', 'string']);
    });
  });

  describe('countOccurences', function () {
    it('correctly counts the number of occurrences for each word', function () {
      book.getText();
      book.splitText();
      expect(book.countOccurences()).toEqual({ this: 1, "isn't": 1, a: 2, story: 1, just: 1, string: 1 });
    });
  });

  describe('sortOccurences', function () {
    it('sorts the words by number of occurrences', function () {
      book.getText();
      book.splitText();
      book.countOccurences();
      expect(book.sortOccurences()).toEqual(['a', 'this', "isn't", 'story', 'just', 'string']);
    });
  });

  describe('printResults', function () {
    it('prints the words sorted by number of occurences', function () {
      book.getText();
      book.splitText();
      book.countOccurences();
      book.sortOccurences();
      expect(book.printResults()).toEqual(['a - 2 prime', 'this - 1', "isn't - 1", 'story - 1', 'just - 1', 'string - 1']);
    });
  });

  describe('numIsPrime', function () {
    it('returns true if the number passed to it is a prime', function () {
      expect(book.numIsPrime(367)).toBe(true);
    });

    it('returns false if the number passed to it is not prime', function () {
      expect(book.numIsPrime(368)).toBe(false);
    });
  });
});
