const parseToJS = (extension) => {
    if (extension === '.json') {
        return JSON.parse;
    }
};

export default parseToJS;