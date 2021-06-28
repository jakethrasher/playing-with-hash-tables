//given two arrays of equal length, write a formula that returns true or false as to whether these two arrays have any items in common
//using nested for loops would lead to O(n^2) complexity
const compareArrays =(arr1, arr2)=>{
    let map = {};
    let common = [];

    arr1.forEach(el => {
        map[el] = true;
    });

    arr2.forEach(item=>{
       if(map[item]){
           common.push(item);
       }
    })
    
    return common.length > 0 ? true : false
};
module.exports = compareArrays;