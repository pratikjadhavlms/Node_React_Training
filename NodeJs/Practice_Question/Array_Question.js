
function addNumbers(arr) {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
    }
const arr = [1, 2, 3, 4];

console.log(addNumbers(arr)); 

