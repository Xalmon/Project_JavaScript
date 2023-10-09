function rangeToArray(start, end, step = 1) {
    let array = [];
  
    if (start <= end) {
      for (let count = start; count <= end; count += step) {
        array.push(count);
      }
    } else {
      for (let count = start; count >= end; count += step) {
        array.push(count);
      }
    }
  
    return array;
  }
  
  console.log(rangeToArray(1, 10));         
  console.log(rangeToArray(10, 1));         
  console.log(rangeToArray(-5, 5));         
  console.log(rangeToArray(1, 10, 2));       
  console.log(rangeToArray(10, 1, -2));      
  console.log(rangeToArray(-5, 5, 2));       
  