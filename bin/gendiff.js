#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import genDiff from '../src/funcGenDiff.js';
import parseToJS from '../src/parseToJS.js';
import { Command } from 'commander/esm.mjs';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1');

program
    .arguments('<fileputh1> <fileputh2>')
    .option('-f, --format <type>', 'output format')
    .action(() => {
        const filePath1 = program.args[0];
        const filePath2 = program.args[1];

        const absolutePath1 = path.resolve(process.cwd(), '__fixtures__', filePath1);
        const absolutePath2 = path.resolve(process.cwd(), '__fixtures__', filePath2);

        const extension1 = path.extname(absolutePath1);
        const extension2 = path.extname(absolutePath2);

        const data1 = fs.readFileSync(absolutePath1);
        const data2 = fs.readFileSync(absolutePath2);

        const object1 = parseToJS(extension1)(data1);
        const object2 = parseToJS(extension2)(data2);

        console.log(genDiff(object1, object2));
    })

program.parse(process.argv);