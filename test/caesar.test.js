// Write your tests here!
const caesarModule = require('../src/caesar')
const expect = require('chai').expect

describe('caesar',()=>{
    it('should shift input right if encode = true'), ()=>{
        let expected ='fds'
        let actual = caesar('cap',3,true)
        expect(actual).to.equal(expected)
    }
    it('Should shift left if encode = false'), ()=>{
        let expected = 'glv'
        let actual = caesar('joy',3,false)
        expect(actual).to.eql(expected)
    }
    it('should return false if shift is not entered, under -25, over 25, or equal to 0'),()=>{
        let expected = false
        let actual = caesar('cap',27, true)
        expect(actual).to.equal(expected)
    }
    it('Should leave spaces and other symbols as is'), ()=>{
        let expected = 'wr, mr'
        let actual = caesar('to, jo',3, true)
        expect(actual).to.equal(expected)
    }
    it('should convert string to lowercase'), ()=>{
        let expected ='def'
        let actual =caesar('ABC',3,true)
        expect(actual).to.equal(expected)
    }

    it('should continue shifting passed z back to a'), ()=>{
        let expected = 'ccc'
        let actual = caesar('zzz',3,true)
        expect(actual).to.equal(expected)
    }
    it('should continue shifting backwards passed a to z'), ()=>{
        let expected = 'zzz';
        let actual = caesar('ccc',3,false)
        expect(actual).to.equal(expected)
    }
    
})