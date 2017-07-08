// Initialize the groceryItems array that will contain grocery objects
var groceryItems = [];

// Create a function to add a new item and price to the array
function addToList(itemName, itemPrice, itemQuantity) {
  // Create variables to store user inputs
  var itemInput = document.getElementById("item");
  var priceInput = document.getElementById("price");
  var quantityInput = document.getElementById("quantity");
  // Create object of user inputs
  var newObject = {name: itemInput.value, price: priceInput.value, quantity: quantityInput.value};
  // Add object to the array of grocery item objects
  groceryItems.push(newObject);
  // See if groceryItem array has anything in it. If it is empty, do not display the table.
  var tableDisplay = document.getElementsByTagName('table');
  if (groceryItems.length > 0) {
    tableDisplay[0].style.display = "table";
  }
  // Create the table elements to contain the displayed user input
  var tableRow = document.createElement('tr');
  var tableElementRemoveButton = document.createElement('button');
  var RemoveButtonText = document.createTextNode('REMOVE');
  tableElementRemoveButton.appendChild(RemoveButtonText);
  tableElementRemoveButton.setAttribute('onclick','removeFromList()')
  var tableElementItem = document.createElement('td');
  var tableElementPrice = document.createElement('td');
  var tableElementQuantity = document.createElement('td');
  var tableElementTotalPrice = document.createElement('td');
  // Insert created elements into the document
  tableDisplay[0].appendChild(tableRow);
  tableRow.appendChild(tableElementItem);
  tableRow.appendChild(tableElementPrice);
  tableRow.appendChild(tableElementQuantity);
  tableRow.appendChild(tableElementTotalPrice);
  tableRow.appendChild(tableElementRemoveButton);
  // Fill the created elements with the user input
  tableElementItem.innerText = itemInput.value;
  tableElementPrice.innerText = priceInput.value;
  tableElementQuantity.innerText = quantityInput.value;
  tableElementTotalPrice.innerText = (priceInput.value * quantityInput.value).toFixed(2);
  // Clear input form fields
  var form = document.getElementById('form');
  form.reset();
}

// Create a function that will remove an element from an array
function removeFromList(i) {
  console.log('cool')
  groceryItems.splice(i, 1);
}
