/*
 * @Author: yemu
 * @Date: 2021-06-25 21:56:46
 * @LastEditTime: 2021-06-25 22:00:51
 * @LastEditors: yemu
 * @Description: 工具类
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