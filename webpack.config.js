var path = require('path');

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/index.js')],		//组件文档
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	resolve:{
        extentions:["","js","jsx"]//当requrie的模块找不到时，添加这些后缀
    },
	devtool: "eval-source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			include:[
				//指定app这个文件里面的采用babel
				path.resolve(__dirname,'app'),
			],
			loader: 'babel',
			query: {
				plugins:['transform-runtime'],
				presets: ['es2015', "stage-1", 'stage-0']
			}
        }],
    }
};

module.exports = config;
