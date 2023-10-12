let x = {value: 10}; // If value of variable x is defined in an object it can be changed outside the object and variable y will also be changed
let y = x;

x.value = 20;

let obj = {value: 20};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);