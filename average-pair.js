// add whatever parameters you deem necessary
function averagePair(ints, avg) {
    let left = 0;
    let right = ints.length - 1;

    while (left < right){
        if ((ints[left] + ints[right]) / 2 === avg){
            return true;
        } else if ((ints[left] + ints[right]) / 2 > avg){
            right--;
        } else {
            left ++;
        }
    }
    return false;
}
