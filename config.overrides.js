const path = require('path');

module.exports = function override(config, env) {
	const babelLoader = config.module.rules.find(rule =>
		rule.oneOf
			? rule.oneOf.find(r => r.loader && r.loader.includes('babel-loader'))
			: null,
	);

	if (babelLoader) {
		const babelLoaderOptions = babelLoader.oneOf.find(
			r => r.loader && r.loader.includes('babel-loader'),
		);
		if (babelLoaderOptions) {
			babelLoaderOptions.include = [
				path.resolve(__dirname, ''),
				path.resolve(__dirname, 'node_modules/react-version-datatables-by-gna'),
			];
		}
	}

	return config;
};
