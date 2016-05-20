/**
 * modern-confirm
 * @author ydr.me
 * @create 2016-04-22 20:03
 */



'use strict';

var Dialog =   require('blear.ui.dialog');
var object =   require('blear.utils.object');
var Template = require('blear.classes.template');
var template = require('./template.html', 'html');

var tpl = new Template(template);
var defaults = {
    width: 300,
    sure: {
        text: '确定',
        type: 'primary'
    },
    cancel: {
        text: '取消',
        type: 'default'
    },
    // 确定按钮位置，0为左边，1为右边
    surePosition: 1,
    title: '确认',
    message: '',
    addClass: ''
};

var Confirm = Dialog.extend({
    className: 'Confirm',
    constructor: function (options) {
        var the = this;

        options = object.assign(true, {}, defaults, options);
        var buttons = [options.cancel, options.sure];

        if (!options.surePosition) {
            buttons.reverse();
        }

        the.Super({
            buttons: buttons,
            closeable: false,
            headable: true,
            title: options.title,
            width: options.width,
            addClass: options.addClass,
            template: tpl.render({options: options})
        });

        // init event
        the.on('action', function (index) {
            index = options.surePosition ? index : Math.abs(1 - index);
            switch (index) {
                case 0:
                    the.emit('cancel');
                    break;

                case 1:
                    the.emit('sure');
                    break;
            }

            the.close();
        });
    }
});

require('./style.css', 'css|style');
Confirm.defaults = defaults;
module.exports = Confirm;
