class ConversionOps{
    decToBin(decVal){
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
            return binaryVal;
          }
          return "0";
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
        }
        return decVal;

    }

    binToHex(binVal){

    }

    hexToDec(hexVal){

    }

    hexToBin(hexVal){

    }




}
export default ConversionOps;