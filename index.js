const arr = [1, 2, 3, 4, 5];

// create myReduce
// Array.prototype.myReduce = function(callback,result) {
//     let i = 0;
//     let arrLength = this.length;
//     if( arguments.length < 2) {
//      i = 1;
//      result = this[0];
//     }
//     for( i ; i < arrLength; i ++) {
//       result = callback(result, this[i], i, this)
//     }
//     return result;
// }
// const output = arr.myReduce((accumulator, currentValue, currentIndex, originalArray) => {
//     return accumulator + currentValue;
// },0)
// console.log(output);

// create myMap
// Array.prototype.myMap = function(callback) {
//   let arrLength = this.length;
//   let newArr = [];
//   for( let i = 0; i < this.length; i++) {
//     result = callback(this[i], i,this);
//     new Promise((resolve, reject) => {
//       newArr.push(result);
//     })
//   }
//   return newArr;
// }
// const output = arr.myMap((number,index,originalArray) => {
//   console.log(originalArray);
//   return number*2;
// })
// console.log(output);

// create myForEach
// Array.prototype.myForEach = function(callback) {
//   let arrLength = this.length;
//   for ( let i = 0; i < arrLength; i++ ) {
//     callback(this[i], i );
//   }
// }
// arr.myForEach((number,index) => {
// })

// create myEvery
// Array.prototype.myEvery = function(callback) {
//     let arrLength = this.length;
//     let result = true;
//     for( let i = 0;  i < this.length; i++) {
//        result = callback(this[i], i, this);
//         if (!result) return result;
//     }
//     return result;
// }
// const result = arr.myEvery((number,index,originalArray) => {
//     return number > 0;
// })

// create mySome
// Array.prototype.mySome = function (callback) {
//   let arrLength = this.length;
//   let result = false;
//   for( let i = 0; i < arrLength; i++) {
//     result = callback(this[i],i);
//     if(result) return result;
//   }
//   return result;
// };

// const result = arr.mySome((number,index) => {
//     return number > 8;
// })
// console.log(result);

// create find;
// Array.prototype.myFind = function(callback,startIndex) {
//     let arrLength = this.length;
//     let i = 0;
//     let result = undefined;
//     for( i; i < arrLength; i++) {
//        result = callback(this[i],i)
//        if(result) return this[i];
//     }
//     return result
// }

// const course = [
//     {
//         id: 1,
//         name: "HTML,CSS"
//     },
//     {
//         id: 2,
//         name: "JavaScript"
//     }
// ]
// const result = course.myFind((item,index) => {
//     console.log(index);
//     return item.name === "JavaScript";
// })

// create myFilter
Array.prototype.myFilter = function(callback) {
  let arrLength = this.length;
  let newArr = [];
  let result = false;
  for(let i = 0; i < arrLength; i++) {
    result = callback(this[i],i);
    if(result) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}
const result = arr.myFilter((item,index) => {
    return item > 8;
})

console.log(result);


