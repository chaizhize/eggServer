/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590035486088_5279';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 静态资源配置
  console.log(appInfo.baseDir, 'xx1');
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public/static/dist'),
  };
  // 模板配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    cache: false,
  };
  config.cluster = {
    listen: {
      port: 8005,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
