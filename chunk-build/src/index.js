// const mytool = require('tool');

window.onload = function () {
  document.getElementById('btnTest').addEventListener('click', fnTest);
  document.getElementById('btnLoadTool').addEventListener('click', fnLoadOtherLibary);
}

function fnTest() {
  import(/* webpackChunkName:'lib-a',webpackPrefetch:true */'./lib-a/a').then(m => {
    m.aTool();
  });
}

function fnLoadOtherLibary(){

}