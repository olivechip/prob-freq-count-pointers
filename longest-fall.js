// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) return 0;

    let longest = 1; 
    let current = 1;

    for (let pointer = 0; pointer < arr.length-1; pointer++){
        if (arr[pointer] > arr[pointer + 1]){
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 1;
        }
    }
    return longest;
}
