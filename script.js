var groceryItems = [];

// See if groceryItem array has anything in it. If it is empty, do not display the table.

// Create a function to add a new item and price to the array
function addToList(itemName, itemPrice, itemQuantity) {
  var itemInput = document.getElementById("item");
  var priceInput = document.getElementById("price");
  var quantityInput = document.getElementById("quantity");
  var newObject = {name: itemInput.value, price: priceInput.value, quantity: quantityInput.value};
  groceryItems.push(newObject);
  var tableDisplay = document.getElementsByTagName('table');
  if (groceryItems.length > 0) {
    tableDisplay[0].style.display = "table";
  }
  var tableRow = document.createElement('tr');
  var tableElementItem = document.createElement('td');
  var tableElementPrice = document.createElement('td');
  var tableElementQuantity = document.createElement('td');
  var tableElementTotalPrice = document.createElement('td');
  tableDisplay[0].appendChild(tableRow);
  tableRow.appendChild(tableElementItem);
  tableRow.appendChild(tableElementPrice);
  tableRow.appendChild(tableElementQuantity);
  tableRow.appendChild(tableElementTotalPrice);
  tableElementItem.innerText = itemInput.value;
  tableElementPrice.innerText = priceInput.value;
  tableElementQuantity.innerText = quantityInput.value;
  tableElementTotalPrice.innerText = priceInput.value * quantityInput.value;
//  groceryItems.forEach(function(i){ // Not right
  //});
  //.innerText = itemInput.value;
}

// Create a function that will remove an element from an array
function removeFromList(i) {
  groceryItems.splice(i, 1);
}
