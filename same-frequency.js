// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {

    //helper function for digit count
    function makeFreqCounter(int){
        const freqCounter = {};
        for (let digit of Array.from(int.toString())){
            freqCounter[digit] = freqCounter[digit] + 1 || 1;
        }
        return freqCounter;
    }

    const keys1 = Object.keys(makeFreqCounter(int1));
    const keys2 = Object.keys(makeFreqCounter(int2));

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1){
        if (!keys2[key]) return false;
        if (keys1[key] !== keys2[key]) return false;
        return true;
    }
}


