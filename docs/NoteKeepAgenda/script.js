const form = document.getElementById('note-form');
let noteDB = [];

function sendData() {
  let formJson = {
    "description": form.elements[2].value,
    "todo": form.elements[0].value,
    "deadline": form.elements[1].value
  };
  noteDB.push(formJson);
}

function updateTable() {
  let newTable = document.getElementById('note-table');
  let row = newTable.insertRow();

  let lastEntry = noteDB[noteDB.length - 1];
  let cell = row.insertCell();
  cell.innerHTML = lastEntry['todo'];
  cell = row.insertCell();
  cell.innerHTML = lastEntry['deadline'];
  cell = row.insertCell();
  cell.innerHTML = lastEntry['description'];
}

function setBuiltInValidation() {
  let noteInput = document.querySelector('#note-form');
  for (let i = 0; i < noteInput.length-1; i++) {
    noteInput[i].required = true;
  };

  noteInput.querySelector('#deadline').pattern = '[0-9]{2}\/[0-9]{2}\/[0-9]{4}';
  noteInput.querySelector('#todo').pattern = '[A-Za-z0-9_ ]{0,20}$';
  noteInput.querySelector('#description').maxLength = 100;
}

setBuiltInValidation();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  sendData();
  updateTable();
});