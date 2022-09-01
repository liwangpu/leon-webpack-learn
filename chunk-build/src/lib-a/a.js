const c = require('./c');

function aTool() {
  console.log(`a tool work!`,);
  c.cTool();
}

console.log(`a js:`,);

module.exports = {
  aTool
};