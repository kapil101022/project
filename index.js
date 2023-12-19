function f1(){
//a Array of names to be added dynamically
  var names = ["kapil", "singh", "raghav"];

  // Get the ul element
  var ulElement = document.getElementById("menu1");

  // Loop through the names array and create li elements dynamically
  for (var i = 0; i < names.length; i++) {
    var divelement = document.createElement("div")
    divelement.setAttribute("class","coldiv");
    // Create li element
    var liElement = document.createElement("li");
    console.log(liElement);
    // Create checkbox input element
    var checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", i + 1); // Setting unique ID for each checkbox

    var checkElement = document.createElement("select");
    checkElement.setAttribute("id", i + 1); // Setting unique ID for each checkbox
    // Set the text content of the li element
    liElement.textContent = names[i];

    // Append the checkbox and li elements to the ul element
    liElement.prepend(checkboxElement);
    liElement.prepend(checkElement);
    divelement.prepend(liElement);
    ulElement.appendChild(divelement);
  }
}

function f2(){
  var boxes = [
    { id: 'b1', name: 'Box 1' },
    { id: 'b2', name: 'Box 2' },
    { id: 'b3', name: 'Box 3' }
  ];

  // Get the row element
  var rowElement = document.getElementById("dynamicRow");

  // Loop through the boxes array and create column elements dynamically
  for (var i = 0; i < boxes.length; i++) {
    // Create column element
    var columnElement = document.createElement("div");
    columnElement.className = "column";
    columnElement.style.background = "green";
    columnElement.setAttribute("onclick", "openTab('" + boxes[i].id + "');");

    // Create checkbox input element
    var checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", i + 1); // Setting unique ID for each checkbox

    // Set the text content of the column element
    columnElement.textContent = boxes[i].name;

    // Append the checkbox and column elements to the row element
    columnElement.prepend(checkboxElement);
    rowElement.appendChild(columnElement);
  }

  // Example function to simulate the openTab function
  function openTab(boxId) {
    console.log("Opening tab for box with ID: " + boxId);
    // Add your logic here to handle opening tabs
  }
  // Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
openTab();
}

function f3(){
// Array of box names and IDs
var boxes1 = [
  { id: 'b1', name: 'Box 1', content: 'Lorem ipsum 1' },
  { id: 'b2', name: 'Box 2', content: 'Lorem ipsum 2' },
  { id: 'b3', name: 'Box 3', content: 'Lorem ipsum 3' }
];

// Get the row element
var rowElement = document.getElementById("dynamicRow2");

// Loop through the boxes array and create column and container elements dynamically
for (var i = 0; i < boxes1.length; i++) {
  // Create column element
  var columnElement = document.createElement("div");
  columnElement.className = "column";
  columnElement.style.background = "green";
  columnElement.setAttribute("onclick", "openTab('" + boxes1[i].id + "');");

  // Create checkbox input element
  var checkboxElement = document.createElement("input");
  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.setAttribute("id", i + 1); // Setting unique ID for each checkbox

  // Set the text content of the column element
  columnElement.textContent = boxes1[i].name;

  // Append the checkbox and column elements to the row element
  columnElement.prepend(checkboxElement);
  rowElement.appendChild(columnElement);

  // Create container element
  var containerElement = document.createElement("div");
  containerElement.id = boxes1[i].id;
  containerElement.className = "containerTab";
  containerElement.style.background = "green";
  
  // Create close button element
  var closeBtnElement = document.createElement("span");
  closeBtnElement.className = "closebtn";
  closeBtnElement.textContent = "x";
  closeBtnElement.setAttribute("onclick", "this.parentElement.style.display='none';");

  // Create content for the container
  var h2Element = document.createElement("h2");
  h2Element.textContent = boxes1[i].name;

  var pElement = document.createElement("p");
  pElement.textContent = boxes1[i].content;

  // Append close button, heading, and paragraph elements to the container
  containerElement.appendChild(closeBtnElement);
  containerElement.appendChild(h2Element);
  containerElement.appendChild(pElement);

  // Append the container to the body
  document.body.appendChild(containerElement);
}

// Example function to simulate the openTab function
}
function openTab(boxId) {
  var containerElement = document.getElementById(boxId);
  containerElement.style.display = 'block';
}
f1();
//f2();
f3();