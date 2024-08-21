// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let seen = new Set();
    let count = 0;

    for (let element of arr){
        let complement = num - element;
        seen.has(complement) ? count ++ : seen.add(element);
    }
    return count;
}
