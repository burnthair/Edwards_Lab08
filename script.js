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
  tableDisplay[0].appendChild(tableRow);
  groceryItems.forEach(function(i){ // Not right
    var tableElement = document.createElement('td');
  })
  //.innerText = itemInput.value;
}

// Create a function that will remove an element from an array
function removeFromList(i) {
  groceryItems.splice(i, 1);
}
