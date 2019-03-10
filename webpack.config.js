module.exports = {
    entry : __dirname + 'index.js',
    output : {
        path : __dirname + '/assets/js',
        filename : 'index.js',
        publicPath : '/temp/'
    },
    devServer : {
        contentBase : './crm1.0htmls',
        host : 'localhost', //这里要是本地是IP地址。
        port : '8086',
    }
}