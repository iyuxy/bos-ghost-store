/**
 * @file util
 * @author darrenywyu@gmail.com
 */

'use strict';

const path = require('path');
const uuidv4 = require('uuid/v4');

var util = {};

util.optionHook = (file, option, key) => {
    if (typeof option[key] === 'function') {
        return option[key](file) || '';
    }
    else if (typeof option[key] === 'string') {
        return option[key];
    }
    else {
        return '';
    }
};

util.getFileName = function (file, option) {

    const extname = path.extname(file.name);
    const basename = uuidv4();

    // 获取文件后缀名，如果希望在文件夹中存储，请设置prefix值
    const prefix = util.optionHook(file, option, 'prefix');

    // 获取文件后缀名
    const suffix = util.optionHook(file, option, 'suffix');

    return prefix + basename + suffix + extname;
}

module.exports = util;module.exports = util;
