// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

// function all(array, callback){
// 	var copy = array.slice(); // shallow copies array

// 	if(copy.length === 0) return true;

// 	if(callback(copy[0])){
// 		copy.shift(); // remove first element from array
// 		return all(copy, callback);
// 	} else {
// 		return false;
// 	}
// }



// function product(arr) {
   
//     let copy = arr.slice()

//     if (copy.length === 1) {
//         console.log(copy.length)
//         return copy[0]
//     } else {
//         copy[0] = copy[0] * copy[1]
//         copy.splice(1,1)
//         console.log(copy)
//         return product(copy)
        
//     }
// }

// console.log(product([1,2,3,10]))

// iterative loops through array and stores the value of each
// index, storing the next index value combined with the previous


// take the value of index 0 and combine with index 1,
// which becomes the new value of index 0,
// so, set index 0 as combined value and remove index 1
// leaving new array with new index 0 value
// whilst "new" index 1 becomes former index 2
// ad infinitum until length of array = 1 (base recursion value) 


// let nestedObject = {
//     test: 44,
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let a = contains(nestedObject, 44); // true
// let b = contains(nestedObject, "foo"); // false
// console.log(a)
// console.log(b)

// function contains(item, value) {

//     let copy = Object.assign({}, item)

//     if (item === undefined) {
//         return false
//     }
    
//     if (Object.values(copy).includes(value)) {
//         return true
//     }
    
//     else {
//         return contains(item[Object.keys(copy)], value) 
//     }
// }

let test = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]
console.table(test)


//  function sumRange(value) {

//     if ( value == 1 ) {
//         console.log(value)
//     return value
//     } 
//     else { 
//         return value + sumRange(value - 1)
    
//     }
// }

// console.log('sumRange = ' + sumRange(4))


// function pow(x, n) {
//     if ( n == 0) {
//         return 1
//     } else {
//         return x * pow(x, n - 1)
//     }
// }
// console.log("power = " + pow(2, 5))


// function fact(value) {

//     if ( value == 1 ) {
//         console.log(1)
//     return 1
//     } 
//     else { 
//         return value * fact(value - 1)
    
//     }
// }

// console.log("factorial = " + fact(5))

// function all(arr, cb) {

// }


// let less = all(arr, function(num) {
//     if ( arr.length = 0 ) {
//     return arr[0] < num
//     }
// })
// console.log(less)


// // 1 + 2 + 3 + 4 = 10

// // 1 + 2 + 3 + 4 + 5 = 15

// // function sumRange(v) {

// // let test = 0
// // for ( let i = 0 ; i <= v ; i++) {
// //    test =  test + i
// //      console.log(test)
// // }
// // }

