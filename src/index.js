class Sorter {
  constructor() {
   this.myArr = [];
   this.funct = function sort (Arr,Arr1)
   {
     return Arr1 - Arr;
   }
  }

  add(element) {
    this.myArr.push(element);
  }

  at(index) {
    return this.myArr[index];
  }

  get length() {
    return this.myArr.push();
  }

  toArray() {
    return this.myArr;
  }

  sort(indices) {
    var tempArr = [];
    for (var i = 0; i < indices.length; i++)
      tempArr.unshift(this.myArr[indices[i]]);
    for (var j = 0; j < tempArr.length - 1;j++)
    {
      for(var k = 0; k < tempArr.length - j; k++)
      {
        if(tempArr[k] > tempArr[k+1])
        {
          var buff = tempArr[k];
          tempArr[k] = tempArr[k+1];
          tempArr[k+1] = buff;
        }
      }
    }
    for (var i = 0; i < indices.length; i++)
      this.myArr[indices[i]] = tempArr[i];
  }

  setComparator(compareFunction) {
    this.funct = compareFunction;
  }
}

module.exports = Sorter;