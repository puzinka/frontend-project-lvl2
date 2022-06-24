#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1');

program
    .argument('<fileputh1>')
    .argument('<fileputh2>')
    .option('-f, --format <type>', 'output format')
 
program.parse();