#!/usr/bin/env node
const fly = require("./src/lib/fly");

const args = process.argv.slice(2);
const [city] = args;
fly(city).then(console.log).catch(console.error);
