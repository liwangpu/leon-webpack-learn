// loader本质上是个函数

module.exports = function (content, map, meta) {
  console.log(`loader 2`);
  return content;
}

module.exports.pitch = function () {
  console.log(`loader pitch 2`);
}