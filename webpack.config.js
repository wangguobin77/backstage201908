/*
* @Author: Marte
* @Date:   2019-08-16 17:38:02
* @Last Modified by:   Marte
* @Last Modified time: 2019-08-16 17:40:12
*/

'use strict';
module.exports = {
    entry : './web/js/*',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + '/out'//输出文件路径
    },
}
