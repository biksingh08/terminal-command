const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (userInput) => {
  fs.writeFile(`${userInput}`, '', function (err) {
    if (err)
        return console.log(err);
    console.log(`${userInput} created`);
});
};

module.exports.mkdir = (userInput) => {
  fs.mkdir(`${userInput}`, function (err) {
    if (err)
        return console.log(err);
    console.log(`${userInput} created`);
});
};
