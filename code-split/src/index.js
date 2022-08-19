const _ = require('lodash');
// const { sort, add } = require('./tool');

// console.log(`title:`, add(1, 5));
import(/* webpackChunkName:'tool' */'./tool').then(({ default: t }) => {
  // console.log(`t:`, t.add(1, 5));

  window.myLibSort();
})

// console.log(`self:`, self);