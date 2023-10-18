let func = function sum(x, y) {
    return x + y;
}

console.log(func(4, 6));


console.log(sum(6, 4))
function sum(x, y) {
    return x + y;
}

function sub(x, y){
    return x - y;
}
console.log(sub(7, 3));

function secondFunc(x, y, z = 1){
    let result = sum(x, y) + z;
    return result;
}

function outerFunc(x){
    function innerFunc(y){
        return x + y;
    }
        return innerFunc;
}

console.log(outerFunc(5)(4));

let ofFive = outerFunc(6);
console.log(ofFive(4));
console.log(ofFive(5));
console.log(ofFive(6));
console.log(ofFive(3));
console.log(ofFive(2));

function outerFunc(x, y){
    function innerFunc(z){
        return z ** 2;
    }
        return x + innerFunc(y);
}


