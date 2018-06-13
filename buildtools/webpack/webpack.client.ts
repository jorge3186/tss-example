import * as merge from 'lodash.merge';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import sharedConfig from './webpack.shared';
import jssConfig from '../config';

/*
  Define the client-side bundle. This is executed by a browser as it runs the JSS application.
*/
export default function(envVars) {
  const expandedSharedConfig: webpack.Configuration = sharedConfig(envVars);

  const merged: webpack.Configuration = merge({}, expandedSharedConfig, {
    name: 'client',
    target: 'web',
    entry: {
      // main entry point for the client application; src/client.js
      client: ['./client.tsx'],
    },
  });

  const optimization: webpack.Options.Optimization = merged.optimization ? merged.optimization : {};
  optimization.splitChunks = {
    cacheGroups: {
      'vendor-client': {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor-client',
        enforce: true,
        chunks: 'all'
      }
    }
  };
  merged.optimization = optimization;

  merged.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  );

  // turn on webpack-dev-server if needed
  if (envVars && envVars.devserver) {
    (merged.entry as any).client.unshift(
      `webpack-dev-server/client?http://localhost:${jssConfig.devServerPort}`
    );
  }

  return merged;
}
