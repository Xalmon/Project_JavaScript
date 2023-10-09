function sumArrayElement(number) {
    let sum = 0;
    let numberArray = [];
  
    for (let count = 1; count <= number; count++) {
      numberArray.push(count);
      sum += count;
    }
  
    console.log(numberArray);
    return `Total sum of elements is ${sum}`;
  }
  
  console.log(sumArrayElement(10));
  