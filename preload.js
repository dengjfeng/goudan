const axios = require('axios');
let resultData = null


window.exports = {
    'gd': {
        mode: 'none',
        args: {
             enter: (action) => {
                var { payload } = action
                window.utools.shellOpenExternal('https://www.baidu.com/s?word=' + payload)
                //退出插件
                window.utools.outPlugin()
            }
        }
    }
}