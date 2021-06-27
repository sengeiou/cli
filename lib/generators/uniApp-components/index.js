/*
 * @Author: yemu
 * @Date: 2021-06-27 19:51:03
 * @LastEditTime: 2021-06-27 19:52:09
 * @LastEditors: yemu
 * @Description: uni-app 组件库
 */
const BasicGenerator = require('../../BasicGenerator.js');

class Generator extends BasicGenerator {
    writing() {
        this.writeFiles({
           
            filterFiles: f => {
                return true;
            },
        });
    }
}

module.exports = Generator;