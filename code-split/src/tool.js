const _ = require('lodash');

function sort() {
  console.log(`sort work`);
}

function task() {

}

function add(a, b) {
  return a + b;
}

// console.log(`ccc:`,);
window.myLibSort = sort;

module.exports = {
  sort,
  task,
  add
}