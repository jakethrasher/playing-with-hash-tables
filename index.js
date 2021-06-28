class HashTable {

    constructor(size=7){
        //passing a single number into the Array constructor returns an array with its length property set to that number 
        this.dataMap = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
    
    set(key, value){
        //get the index where key value pair will be stored
        let index = this._hash(key);

        //if there isn't already an empty array at the index
        //create empty array to push key value pairs into
        if(!this.dataMap[index]) this.dataMap[index] = [];

        this.dataMap[index].push([key,value]);

        //return the hash table
        return this;
    }

    get(key){
        let index = this._hash(key);
        if(this.dataMap[index]){
           for(let i = 0; i< this.dataMap[index].length; i++){
               if(this.dataMap[index][i][0] === key){
                return this.dataMap[index][i][1];
               }
           }
        }
        return undefined;
    }

    keys(){
        let allKeys = [];
        for(let i = 0; i < this.dataMap.length; i++){

            const outerArr = this.dataMap[i];
            if(outerArr){
                for(let j = 0; j < outerArr.length; j++){
                    const innerArr = outerArr[j];
                    allKeys.push(innerArr[0])
                }
            }
        }
        return allKeys;
    }
    
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 200)
myHashTable.set('washers', 40)
myHashTable.set('lumber', 10)
console.log('hashtable', myHashTable)
console.log(myHashTable.keys())
