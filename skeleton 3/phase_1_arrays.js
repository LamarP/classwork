// Array.prototype.unique = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let el = this[i];
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

  
  
  
// console.log([1, 2, 2, 3, 3, 3].unique());
// // => [1, 2, 3])
  
// Array.prototype.twoSum = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     for (let j = i + 1; j < this.length - 1; j++) {
//       let sum = this[i] + this[j];
//       if (sum === 0) {
//         newArr.push([i, j]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log([1, -1, 2, -2, 3, 3, 3].twoSum());


// Array.prototype.transpose = function () {
//   let transpose = [];
//   for (let i = 0; i < this.length; i++) {
//     transpose.push([])
//   }
//   for (let i = 0; i < this.length; i++) {
//     let row = this[i];
//     for (let j = 0; j < row.length; j++) {
//       let el = row[j];
//       transpose[j][i] = el;

//     }
//   }
//   return transpose;
// }
 
// let matrix = [[2, 3],
//               [1, 5]]

// console.log(matrix.transpose());


Array.prototype.myEach = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    el.callBack;
  }
}
let callBack =  function () {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length - 1; j++) {
      let sum = this[i] + this[j];
      if (sum === 0) {
        newArr.push([i, j]);
      }
    }
  }
  return newArr;
}
  console.log([1, -1, 2, -2, 3, 3, 3].myEach(callBack));
 