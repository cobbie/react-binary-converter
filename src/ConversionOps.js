class ConversionOps{
    hexDict = {
        "a": 10,
        "b": 11,
        "c": 12,
        "d": 13,
        "e": 14,
        "f": 15
    };
    decToBin(decVal, fBit = false){
        if (decVal.length > 0 && isNaN(parseInt(decVal)) === false) {
            let binaryVal = "";
            let currentDecVal = parseInt(decVal);
            while (true) {
              binaryVal = (currentDecVal % 2).toString() + binaryVal;
              currentDecVal = Math.floor(currentDecVal / 2);
              if (currentDecVal === 0) {
                break;
              }
            }
            if(fBit && binaryVal.length < 4){
                while(binaryVal.length != 4){
                    binaryVal = "0" + binaryVal;
                }
            }
            return binaryVal;
          }
    }

    decToHex(decVal){
        return 0;
    }

    binToDec(binVal){
        let decVal = "";
        let currentBin = 1;
        for(let i = 0; i <= binVal.length-1; i++){
            if(binVal[(binVal.length-1) - i] === "1"){
                decVal += String(currentBin);
            }
            currentBin *= 2;
        }
        return decVal;

    }

    binToHex(binVal){

    }


    hexToDec(hexVal){
        
    }

    hexToBin(hexVal){
        let binVal = "";
        for(let i = 0; i < hexVal.length; i++){
            if(isNaN(parseInt(hexVal[i]))===false && parseInt(hexVal[i]) < 10){
                binVal += this.decToBin(hexVal[i], true);
            } else{
                binVal += this.decToBin(String(this.hexDict[hexVal[i].toLowerCase()]), true);
            }
            // console.log(this.decToBin(this.hexDict[hexVal[i].toLowerCase()]));
        }
        return binVal;
    }




}
export default ConversionOps;