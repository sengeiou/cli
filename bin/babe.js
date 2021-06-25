#! /usr/bin/env node
const yParser = require('yargs-parser');

const program = require('commander');
const package = require('../package.json');

const args = yParser(process.argv.slice(2));
const project = args._[0];

const run = require('../lib/run.js');

program.version(package.version);

program.parse(process.argv);

if (project) {
    run({ name: project });
} else {
    program.help();
}
