import _ from 'underscore'
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
                while(binaryVal.length !== 4){
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
        let decVal = 0;
        let currentBin = 1;
        for(let i = 0; i <= binVal.length-1; i++){
            if(binVal[(binVal.length-1) - i] === "1"){
                 decVal += currentBin;
            }
            currentBin *= 2;
            console.log("input binVal: " + binVal)
        console.log("decVal: " + decVal);
        console.log("Current Bin: " + currentBin);
        }
        return decVal;

    }

    binToHex(binVal){
        let hexVal = "";
        while(binVal.length % 4 !== 0){
                binVal = "0" + binVal;
        }
        for(let i = 0; i < binVal.length-1; i += 3){
            // const tempDec = this.binToDec(binVal.slice(i, i+4));
            console.log("binVal: " + binVal.slice(i, i+4));
            console.log("tempDec: " + this.binToDec(binVal.slice(i, i+4)));
            // if(tempDec >= 10){
            //     hexVal += (_.invert(this.hexDict))[tempDec].toUpperCase();
            // } else{
            //     hexVal += tempDec;
            // }
        }
        // return hexVal;
    }


    hexToDec(hexVal){
        return this.binToDec(this.hexToBin(hexVal));
    }

    hexToBin(hexVal){
        let binVal = "";
        for(let i = 0; i < hexVal.length; i++){
            if(isNaN(parseInt(hexVal[i]))===false && parseInt(hexVal[i]) < 10){
                binVal += this.decToBin(hexVal[i], true);
            } else{
                binVal += this.decToBin(String(this.hexDict[hexVal[i].toLowerCase()]), true);
            }
        }
        return binVal;
    }




}
export default ConversionOps;