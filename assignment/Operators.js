function AritOperations(left_operand, operator, right_operand) {
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
  
  console.log(AritOperations(5, "+", 3));
  console.log(AritOperations(10, "-", 4));
  console.log(AritOperations(6, "*", 2));
  console.log(AritOperations(8, "/", 2));
  console.log(AritOperations(7, "/", 0));
  console.log(AritOperations(9, "%", 5));
  