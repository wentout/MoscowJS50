'use strict';

debugger;

const { define } = require('mnemonica');
// const BasePrototype = require('typeomatica');

debugger;
const BaseConstructor = define('Base', async function (params) {
    // debugger;
    // return BasePrototype;
    Object.assign(this, params);
});

// debugger;
// BaseConstructor.define('AsyncConstructor', function () {
//     return async function (params) {
//         debugger;
//         Object.assign(this, params);
//         debugger;
//     }
// });

// debugger;

(async function () {
    debugger;
    const params = {
        some: 'some',
        param: 321
    };

    const instance = await new BaseConstructor(params);
    // const instance = await new BaseConstructor().AsyncConstructor();

    debugger;
})();
