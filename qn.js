#!/usr/bin/env node
'use strict'
var colors = require('colors');

var qn = {};
var config = {};

try{
  config = require('./config/global.js');
}
catch(e){
  console.log('[WARNING]  should first config global.js.'.red);
  process.exit(1);
}
qn.config = config;

module.exports = qn;