//引入一個包
const path = require('path');

//webpack中的所有配置信息都應該寫在module.exports裡
module.exports = {

    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在的目錄
    output: {
        //指定打包後的目錄
        path: path.resolve(__dirname, 'dist'),

        //打包後的文件
        filename:"bundle.js"
    },

    //指定webpack打包時要用的模塊
    module:{
        //指定要加載的規則
        rules:[
            {
                //test指定的是規則生效的文件
                //匹配所有ts結尾的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    }




};