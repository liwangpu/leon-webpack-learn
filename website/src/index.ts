// import { sort } from './tool';
// // import _ from 'lodash';

// sort();

setTimeout(() => {
    import('./tool').then(m => {
        console.log('加载完毕:', m);

    })
}, 2000);