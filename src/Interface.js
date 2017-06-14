window.onload = function () {

  var fileInput = document.getElementById('fileInput');
  var wordOutput = document.getElementById('wordOutput');

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function () {
        var book = new Book(fileReader.result);
        book.analyse();

        // wordListArea.innerHTML = listWords.wrapWordsInHtml(wordArray).join(' ');
      };
    } else {
      alert('Please select a valid .txt file');
    }
  });
};
