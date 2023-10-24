function loop(value, testFunction, updateFunction, bodyFunction){
    while(testFunction(value)){
        bodyFunction(value);
        value = updateFunction(value);
    }
}

loop(0,
    (value) => value < 5,
    (value) => value + 1,
    (value) => {
        console.log(value);
    }
);