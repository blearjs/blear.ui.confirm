/**
 * 文件描述
 * @author ydr.me
 * @create 2018-10-12 13:24
 * @update 2018-10-12 13:24
 */


'use strict';

var Confirm = require('../src/index');

var confirm = new Confirm({
    message: '确认吗'
});

confirm.on('sure', function () {
    alert('您点了确认');
});

confirm.on('cancel', function () {
    alert('您点了取消');
});

document.getElementById('open').onclick = function () {
    confirm.open();
};
