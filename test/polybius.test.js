// Write your tests here!
const {polybius} = require('../src/polybius')
const expect = require('chai').expect

describe('polybius',()=>{
    //encode happypath
    it('should convert each letter to the designated number assigned',()=>{
        let expected = '113341';
        let actual = polybius('and', true)
        expect(actual).to.equal(expected)
    })
    //decode happy path
    it('Should convert each number set back to a letter',()=>{
        let expected = 'and';
        let actual = polybius('113341',false)
        expect(actual).to.equal(expected)
    })
    //edge cases
    it('should return false if the length of all of the numbers is odd',()=>{
        let expected = false;
        let actual = polybius('11331', false)
        expect(actual).to.equal(expected)
    })
    it('Should change i/j to 42',()=>{
        let expected = '42';
        let actual = polybius('i', true)
        expect(actual).to.equal(expected)
    })
    
    it('Should change 42 back to i/j',()=>{
        let expected = '(i/j)';
        let actual = polybius('42',false)
        expect(actual).to.equal(expected)
    })
    //edge cases
    it('should leave spaces as is',()=>{
        let expected ='y o';
        let actual = polybius('45 43', false)
        expect(actual).to.equal(expected)
    })
    it('should leave spaces as is when encoding',()=>{
        let expected = '45 43';
        let actual = polybius('y o', true)
        expect(actual).to.equal(expected)
    })
})