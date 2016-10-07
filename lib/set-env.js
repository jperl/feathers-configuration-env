const configuration = require('feathers-configuration');
const debug = require('debug')('feathers-configuration-env');
const path = require('path');

module.exports = function setEnv() {
  const loadConfig = configuration(process.cwd());

  // Pretend we are a feathers app
  const pretendApp = {
    settings: {
      env: process.env.NODE_ENV || 'development',
    },
    set: function (name, value) {
      debug('Set ' + name + '=' + value);
      process.env[name] = value;
    },
  };

  // Load the environment variables
  loadConfig.bind(pretendApp)();
};
