# Word-Counter Tech Test

A Javascript application which takes a book as an input text file and outputs how many times each word occurs in the book. It also displays whether the number of occurrences for each word is a prime number or not.

The application ignores irrelevant punctuation and capitalisation.
```
'Question' and 'Question?' are both counted as the same word.
'The' and 'the' are both counted as the same word.
"don't" is counted as a single word.
'mother-in-law' is counted as a single word.
```

### How to run the application

**1. Install node (if you haven't already)**
```
$ brew install node
```
**2. Clone and update repo**
```
$ git clone git@github.com/petewilkins/WordCounter.git
$ cd WordCounter
$ npm install
```
If you encounter any errors, update node package manager and try again.
```
$ npm update
```

**3. Tests**

Make sure you're in the WordCounter directory.

```
$ npm test
```
A window should open in your browser and run the tests using Jasmine.

![alt text](http://i.imgur.com/AHVmh0m.png)

**4. Run Application**

Make sure you're in the WordCounter directory. The path to a text file should be provided as the third argument. Two example files are included in the books/ directory which can be run as shown below.

```
$ npm start books/the-railway-children.txt
$ npm start books/lorem-ipsum.txt
```

**5. Error Handling**

Error messages are shown if no text file is provided or if the file name provided does not exist.

```
$ npm start

Text file argument incorrect. Suggested use: npm start books/the-railway-children.txt

$ npm start an-invalid-text-file.txt

Text file argument incorrect. Suggested use: npm start books/the-railway-children.txt
```


### Technologies used

- [Vanilla JavaScript](https://www.javascript.com/)

- [Jasmine](https://jasmine.github.io/)
(Testing framework)

- [NodeJS](https://nodejs.org/en/)
(JavaScript runtime environment)
