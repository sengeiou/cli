/*
 * @Author: yemu
 * @Date: 2021-06-25 21:56:46
 * @LastEditTime: 2021-06-26 15:51:42
 * @LastEditors: yemu
 * @Description: react hooks
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