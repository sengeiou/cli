/*
 * @Author: yemu
 * @Date: 2021-06-25 22:38:39
 * @LastEditTime: 2021-06-25 22:42:43
 * @LastEditors: yemu
 * @Description: 工具库
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