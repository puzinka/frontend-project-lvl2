import _ from 'lodash';

const genDiff = (obj1, obj2) => {
    const collKeys1 = Object.keys(obj1);
    const collKeys2 = Object.keys(obj2);

    const allKeys = _.sortBy(_.union(collKeys1, collKeys2));

    const arrStr = allKeys.map((key) => {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (obj1[key] === obj2[key]) {
                return `  ${key}: ${obj1[key]}`;
            }
            return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`];
        }
        if (obj1.hasOwnProperty(key) && !obj2.hasOwnProperty(key)) {
            return `- ${key}: ${obj1[key]}`;
        }
        if (!obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            return `+ ${key}: ${obj2[key]}`;
        }
    });

    const str = _.flatten(arrStr).join('\n ');
    const result = `{\n ${str}\n}`;
    
    console.log(result);
};

export default genDiff;