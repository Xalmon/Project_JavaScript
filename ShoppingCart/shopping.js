function createRowElements() {
    return {
      shoppingCart: document.getElementsByTagName("tbody")[0],
      newRow: document.createElement("tr"),
      newItem: document.createElement("td"),
      itemPrice: document.createElement("td"),
      quantityInput: document.createElement("input"),
      removeButton: document.createElement("button"),
      sum: document.createElement("td"),
    };
  }
  
  function getUserInput() {
    const item = document.getElementById("item");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    return { item, price, quantity };
  }
  
  function addToCart() {
    const { item, price, quantity } = getUserInput();
  
    if (item.value !== "" && !isNaN(price.value) && !isNaN(quantity.value) && parseFloat(price.value) > 0 && parseInt(quantity.value) > 0) {
      const { newRow, shoppingCart, newItem, itemPrice, quantityInput, removeButton, sum } =
        createRowElements();
  
      newItem.innerText = item.value;
      itemPrice.innerText = price.value;
      quantityInput.value = quantity.value || 1;
  
      removeButton.innerText = "Remove";
      removeButton.onclick = function () {
        shoppingCart.removeChild(newRow);
        calculateAmount();
      };
  
      const totalItemAmount = parseFloat(price.value) * parseInt(quantityInput.value);
      sum.innerText = totalItemAmount.toFixed(2);
  
      newRow.appendChild(newItem);
      newRow.appendChild(itemPrice);
      newRow.appendChild(quantityInput);
      newRow.appendChild(removeButton);
      newRow.appendChild(sum);
      shoppingCart.appendChild(newRow);
  
      calculateAmount();
  
      item.value = "";
      price.value = "";
      quantity.value = "";
    } else {
      alert("Please enter valid values for item, price and quantity.");
    }
  }
  
  function removeFromCart() {
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");
  
    if (rows.length > 0) {
      shoppingCart.removeChild(rows[rows.length - 1]);
      calculateAmount();
    }
  }
  
  function calculateAmount() {
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");
    let totalQuantit = 0;
  
    for (let itemInCart = 0; itemInCart < rows.length; itemInCart++) {
      const sumCell = rows[itemInCart].getElementsByTagName("td")[4];
      totalQuantity += parseFloat(sumCell.innerText);
    }
  
    console.log("Total Amount: $" + totalQuantit.toFixed(2));
  }
 
  