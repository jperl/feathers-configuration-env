#!/usr/bin/env node

const setEnv = require('./lib/set-env');
const debug = require('debug')('feathers-configuration-env');
const shell = require('shelljs');

setEnv();

// Run the command from the arguments
const args = process.argv.slice(2);
const commandFromArguments = args.join(' ');
debug('Executing ' + commandFromArguments)
shell.exec(commandFromArguments);
