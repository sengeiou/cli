/*
 * @Author: yemu
 * @Date: 2021-06-25 21:32:18
 * @LastEditTime: 2021-06-25 21:41:37
 * @LastEditors: yemu
 * @Description: 脚手架
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
