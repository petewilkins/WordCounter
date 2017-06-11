describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book("This isn't a great story, is it?");
  });

  describe('on Initialize', function () {
    it('is empty by default', function () {
      expect(book.getText()).toEqual("This isn't a great story, is it?");
    });
  });

  describe('splitText', function () {
    it('splits input text into an array of words', function () {
      expect(book.splitText()).toEqual(['This', "isn't", 'a', 'great', 'story', 'is', 'it']);
    });
  });
});
