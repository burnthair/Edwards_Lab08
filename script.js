// Initialize the groceryItems array that will contain grocery objects
var groceryItems = [];
var tableDisplay = document.getElementsByTagName('table');
var subtotal = 0;

// Create a function to add a new item and price to the array
function addToList(itemName, itemPrice, itemQuantity) {
  // Create variables to store user inputs
  itemName = document.getElementById("item");
  itemPrice = document.getElementById("price");
  itemQuantity = document.getElementById("quantity");
  // Create object of user inputs
  var newObject = {name: itemName.value, price: itemPrice.value, quantity: itemQuantity.value};
  // Add object to the array of grocery item objects
  groceryItems.push(newObject);
  isTableDisplayed();
  // Create the table elements to contain the displayed user input
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('id','groceryItems.indexOf(this)');
  var tableElementRemoveButton = document.createElement('button');
  var RemoveButtonText = document.createTextNode('REMOVE');
  tableElementRemoveButton.appendChild(RemoveButtonText);
  tableElementRemoveButton.setAttribute('onclick','removeFromList()');
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
  tableElementItem.innerText = itemName.value;
  tableElementPrice.innerText = itemPrice.value;
  tableElementQuantity.innerText = itemQuantity.value;
  tableElementTotalPrice.innerText = (itemPrice.value * itemQuantity.value).toFixed(2);
  // Add the value of each line's total to the subtotal and display it in the Subtotal cell
  var tempTotalPrice = Number(tableElementTotalPrice.innerText);
  subtotal += tempTotalPrice;
  var fillSubtotalElement = document.getElementById('subtotalElement');
  fillSubtotalElement.innerText = subtotal.toFixed(2);
  // Calculate the total including tax and display it in the Total cell
  var finalTotal = (subtotal * 1.06).toFixed(2);
  var fillTotalElement = document.getElementById('totalElement');
  fillTotalElement.innerText = finalTotal;
  // Clear input form fields
  var form = document.getElementById('form');
  form.reset();
}

// Function to see if groceryItem array has anything in it. If it is empty, do not display the table.
function isTableDisplayed() {
  if (groceryItems.length > 0) {
    tableDisplay[0].style.display = "table";
    tableDisplay[1].style.display = "table";
  } else {
    tableDisplay[0].style.display = "none";
    tableDisplay[1].style.display = "none";
  }
}

// Create a function that will remove an element from an array
function removeFromList(i) {
  console.log('cool')
  groceryItems.splice(i, 1);
  var currentRow = thisiswhereistopped;
}


// // Create a function to update the subtotal when an object is created or removed
// function updateSubtotal(k) {
//   subtotal += k.value;
//   return
// }
// groceryItems.forEach(function(i){
//   i.quantity = prompt('How many ' + i.name + '?');
//   tempPrice = i.price * i.quantity;
//   total += tempPrice;
//   console.log("Item: " + i.name + " || Price: " + i.price + " || Quantity: " + i.quantity + " || Sub: " + tempPrice.toFixed(2));;
// })
// // Create a function to update the total with tax when an object is created or removed
// function updateTotal() {
//
// }
