// Write your tests here!
const substitutionModule = require('../src/substitution')
const expect = require('chai').expect

 describe('substitution',()=>{
     it('Should encode a message by using substitution alphabet'), ()=>{
         let expected = 'jrufscpw';
         let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev",true)
         expect(actual).to.equal(expected)
     }
     it('Should return false if alphabet is undefined, alphabet length is less 26, or if there are repeat characters'),()=>{
        let expected = false
        let actual = substitution('thinkful','',true)
        expect(actual).to.equal(expected)
     }
     it('Should keep spaces where they are needed'),()=>{
        let expected = 'e b'
        let actual = substitution('y o', 'xoyqmcgrukswaflnthdjpzibev',true)
        expect(actual).to.equal(expected)
     }
     it('Should decode a message by using substitution alphabet'), ()=>{
        let expected = 'thinkful';
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev",false)
        expect(actual).to.equal(expected)
    }
    it('Should return false if alphabet is undefined, alphabet length is less 26, or if there are repeat characters'),()=>{
       let expected = false
       let actual = substitution('thinkful','',false)
       expect(actual).to.equal(expected)
    }
    it('Should keep spaces where they are needed'),()=>{
       let expected = 'e b'
       let actual = substitution('y o', 'xoyqmcgrukswaflnthdjpzibev',false)
       expect(actual).to.equal(expected)
    }

    })
