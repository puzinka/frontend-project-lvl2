import genDiff from '../src/funcGenDiff.js';

const obj1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
};

const obj2 = { 
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io" 
};

const result = '{ - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';

test('genDiff', () => {
    expect(genDiff(obj1, obj2)).toEqual(result);
});