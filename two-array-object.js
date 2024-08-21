// add whatever parameters you deem necessary

//twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}

function twoArrayObject(keys, vals) {
    const obj = {};

    //case if # of vals > # of keys
    if (vals.length > keys.length){
        vals = vals.slice(0, keys.length)

        for (let i = 0; i < keys.length; i++){
            obj[keys[i]] = vals[i];
        }
    }

    //case if # of keys > # of vals
    if (vals.length <= keys.length){

        for (let i = 0; i < keys.length; i++){
            obj[keys[i]] = vals[i] || null;
        }
    }


    return obj;
}
