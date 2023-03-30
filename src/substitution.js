// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let finalProduct = []
    let regAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const charSet = new Set(alphabet)
    if(alphabet === undefined || alphabet.length < 26 || [...charSet].length < 26)return false;
    alphabet.split('')
//if encode we need to loop through the regalphabet and 
    if(encode){
      for(let i = 0;i<26;i++){
        finalProduct[regAlphabet[i]]= alphabet[i];
      }
    }
    else{
      for(let i = 0; i<26;i++){
        finalProduct[alphabet[i]] = regAlphabet[i]
      }
    }
      let finalDecode = input.toLowerCase().split('').map((letter)=>{
        if(letter === ' ')return ' ';
          return finalProduct[letter]

      })
    
      return finalDecode.join('')
    

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
