describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book("This isn't a story, just a string!");
  });

  describe('on initialization', function () {
    it('text has the text from the book', function () {
      expect(book.text).toEqual("This isn't a story, just a string!");
    });

    it('glossary is empty', function () {
      expect(book.glossary.length).toEqual(0);
    });

    it('wordCounter is empty', function () {
      expect(book.wordCounter).toEqual({});
    });

    it('wordsSorted is empty', function () {
      expect(book.wordsSorted.length).toEqual(0);
    });
  });

  describe('getText', function () {
    it('returns the book text in lowercase', function () {
      expect(book.getText()).toEqual("this isn't a story, just a string!");
    });
  });

  describe('splitText', function () {
    it('splits input text into an array of words ignoring punctuation', function () {
      book.text = "this isn't a story, just a string!";
      expect(book.splitText()).toEqual(['this', "isn't", 'a', 'story', 'just', 'a', 'string']);
    });
  });

  describe('countOccurences', function () {
    it('correctly counts the number of occurrences for each word', function () {
      book.text = "this isn't a story, just a string!";
      expect(book.countOccurences()).toEqual({ this: 1, "isn't": 1, a: 2, story: 1, just: 1, string: 1 });
    });
  });

  describe('sortOccurences', function () {
    it('sorts the words by number of occurrences', function () {
      book.glossary = ['this', "isn't", 'a', 'story', 'just', 'string'];
      book.wordCounter = { this: 1, "isn't": 1, a: 2, story: 1, just: 1, string: 1 };
      expect(book.sortOccurences()).toEqual(['a', 'this', "isn't", 'story', 'just', 'string']);
    });
  });

  describe('printResults', function () {
    it('prints the words sorted by number of occurences', function () {
      book.wordCounter = { this: 1, "isn't": 1, a: 2, story: 1, just: 1, string: 1 };
      book.glossary = ['a', 'this', "isn't", 'story', 'just', 'string'];
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
