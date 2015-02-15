#!/usr/bin/env node
'use strict'
var config = require('./config/global.js');

var qn = {};

qn.config = config;

module.exports = qn;