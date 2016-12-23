var path = require('path');
var webpack = require('webpack');

new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
}),

config = {
    // entry: [path.resolve(__dirname, 'app/entry/meeting/index.jsx')],		//微会议
    entry: [path.resolve(__dirname, 'app/index.js')],		//组件文档
    // entry: [path.resolve(__dirname, 'app/entry/index.jsx')],		//宗教局
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
	],
	resolve:{
        extentions:["","js","jsx"]//当requrie的模块找不到时，添加这些后缀
    },
	devtool: false,
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
