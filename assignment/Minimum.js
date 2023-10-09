function minimum(a, b) {
    if (a > b) {
      return b;
    } else if (a < b) {
      return a;
    } else {
      console.log("Numbers are the same");
    }
  }
  
  console.log(minimum(-1, 10));
  