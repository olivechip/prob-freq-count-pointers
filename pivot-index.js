// add whatever parameters you deem necessary
function pivotIndex(arr) {
    if (arr.length === 0) return -1;

    //helper function to find sum of sub-arrays
    function sum(arr){
        let sum = 0;
        for (let num of arr){
            sum += num;
        }
        return sum;
    };

    for (let pivot = 1; pivot < arr.length - 1; pivot++){
        let leftArr = arr.slice(0, pivot);
        let rightArr = arr.slice(pivot + 1);

        if (sum(leftArr) === sum(rightArr)) return pivot;
    } 
    return -1;

}
