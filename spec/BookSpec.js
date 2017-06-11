describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book('A really really short example story');
  });

  it('is empty by default', function () {
    expect(book.getText()).toEqual('A really really short example story');
  });

});
