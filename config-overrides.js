// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
module.exports = function override(config, env) {
	config.resolve.fallback = {
		buffer: require.resolve('buffer'),
		http: require.resolve('stream-http'),
		https: require.resolve('https-browserify'),
		process: require.resolve('process/browser'),
		stream: require.resolve('stream-browserify'),
		timers: require.resolve('timers-browserify'),
		url: require.resolve('url'),
	};
	config.plugins.push(
		new webpack.ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer'],
		}),
	);

	return config;
};
