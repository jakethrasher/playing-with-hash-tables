const compareArrays = require('../compareArrays');

describe('compare arrays', ()=>{
    it('should check for common elements in two arrays', ()=>{

        const array1 = [1,2,5], array2 = [2,4,6],
        array3 = [4,4,4],
        array4 = [5,5,5];
        
        expect(compareArrays(array1,array2)).toBe(true);
        expect(compareArrays(array3,array4)).toBe(false);
        
    })
})

