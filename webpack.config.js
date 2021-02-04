let path = require('path');

let conf ={
    context: __dirname,
    devtool: "source-map",
    entry: "./forWebpack/index.js",//что преобразовывать
    output: {
        path: path.resolve(__dirname, "dist"),//куда преобразовывать
        filename: "bundle.js",// имя файла сборки
        publicPath: "dist/",// относительная ссылка , от куда брать файл async brawser
    },
    devServer:{
        overlay:true // информативное сообщение об ошибке на экран
    }
};

module.exports = conf;