describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book("This isn't a story, or a poem, just some text!");
  });

  describe('getText', function () {
    it('returns the book text in lowercase', function () {
      expect(book.getText()).toEqual("this isn't a story, or a poem, just some text!");
    });
  });

  describe('splitText', function () {
    it('splits input text into an array of words ignoring punctuation', function () {
      book.getText();
      expect(book.splitText()).toEqual(['this', "isn't", 'a', 'story', 'or', 'a', 'poem', 'just', 'some', 'text']);
    });
  });

  describe('countOccurences', function () {
    it('correctly counts the number of occurrences for each word', function () {
      book.text = 'A story, a poem';
      book.getText();
      book.splitText();
      expect(book.countOccurences()).toEqual({ a: 2, story: 1, poem: 1 });
    });
  });

  describe('sortOccurences', function () {
    it('sorts the words by number of occurrences', function () {
      book.text = 'A story, a poem';
      book.getText();
      book.splitText();
      book.countOccurences();
      expect(book.sortOccurences()).toEqual(['a 2', 'story 1', 'poem 1']);
    });
  });
});
