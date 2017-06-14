window.onload = function () {

  var fileInput = document.getElementById('fileInput');
  var wordOutput = document.getElementById('wordOutput');
  var github = document.getElementById('github-button');

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function () {
        var book = new Book(fileReader.result);

        wordOutput.innerHTML = book.analyse();
      };
    } else {
      alert('Please select a valid text file (.txt, .html)');
    }
  });

  github.addEventListener('click', function () {
    window.location.href = 'https://github.com/petewilkins/WordCounter';
  });
};
