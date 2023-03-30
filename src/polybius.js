const polybiusModule = (function () {
  // you can add any code you want within this function scope

 const lookup = {
  'a':11, 'b':21,  'c':31, 'd':41, 'e':51, 'f':12, 'g':22,
  'h':32, 'j':42,  'i':42,  'k':52, 'l':13, 'm':23, 'n':33, 'o':43,
  'p':53, 'q':14,  'r':24, 's':34, 't':44, 'u':54, 'v':15,
  'w':25, 'x':35,  'y':45, 'z':55
}
const reverseLookup = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }
  function polybius(input, encode = true) {
    let finalMessage =''
    let message = input.toLowerCase()
    
  if(encode){
    for(let i = 0; i<message.length; i++){
      const letter = message[i]
      if(letter === ' '){
        finalMessage+= ' ';
      }
      else{
        finalMessage += lookup[letter] + ''
      }
    }
  }
   else{
    const splitNums = input.split(' ').join('')
    if(splitNums.length %2 === 1)return false
  
     // loop through our array message
   for(let i = 0; i < input.length; i++){
    const currentObj = input[i];
    //if currentObj ==
     if(currentObj === ' '){
      finalMessage += ' ';
    }else{
      let temp =`${currentObj}${input[i+1]}`
      finalMessage += reverseLookup[temp]
      i++
    }
   }
 
      }
      return finalMessage.trim();
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
