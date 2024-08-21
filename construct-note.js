// add whatever parameters you deem necessary
function constructNote(msg, letters) {

    //helper function for letter count
    function makeFreqCounter(msg){
        const freqCounter = {};
        for (let letter of msg){
            freqCounter[letter] = freqCounter[letter] + 1 || 1;
        }
        return freqCounter;
    }

    const msgFreq = makeFreqCounter(msg);
    const letterFreq = makeFreqCounter(letters);

    for (let letter in msgFreq){
        if (!letterFreq[letter]) return false;
        if (msgFreq[letter] > letterFreq[letter]) return false;
    }
    return true;
}
