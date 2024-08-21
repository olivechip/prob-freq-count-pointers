// add whatever parameters you deem necessary
function separatePositive(ints) {

    //case if ints are all positive or all negative
    let allNeg = true;
    let allPos = true;

    for (let num of ints){
        if (num > 0){
            allNeg = false;
        } else {
            allPos = false;
        }
        if (!allPos && !allNeg){
            break;
        }
    }
    
    if (allPos || allNeg) return ints;

    //2-pointer approach
    let left = 0;
    let right = ints.length - 1;

    while (left < right){
        if (ints[left] > 0){
            left++;
        } 
        if (ints[right] < 0){
            right--;
        }
        debugger;
        if (ints[left] < 0 && ints[right] > 0){
            let temp = ints[left];
            ints[left] = ints[right];
            ints[right] = temp;
            left++;
            right--;
        }
    }
    return ints;
}
