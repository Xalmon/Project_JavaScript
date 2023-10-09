function operations(left_operand, operator, right_operand) {
    let ans;
  
    if (operator === "+") {
      ans = left_operand + right_operand;
    } else if (operator === "-") {
      ans = left_operand - right_operand;
    } else if (operator === "*") {
      ans = left_operand * right_operand;
    } else if (operator === "/") {
      if (right_operand !== 0) {
        ans = left_operand / right_operand;
      } else {
        ans = "Division by zero is not allowed";
      }
    } else if (operator === "%") {
      if (right_operand !== 0) {
        ans = left_operand % right_operand;
      } else {
        ans = "Division by zero is not allowed";
      }
    } else {
      ans = NaN;
    }
  
    return ans;
  }
  
  console.log(operations(5, "+", 3));
  console.log(operations(10, "-", 4));
  console.log(operations(6, "*", 2));
  console.log(operations(8, "/", 2));
  console.log(operations(7, "/", 0));
  console.log(operations(9, "%", 5));
  