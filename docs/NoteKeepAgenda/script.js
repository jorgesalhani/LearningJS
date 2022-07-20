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

function createTable() {
  newTable = document.createElement('table');
  newTable.style.width = '100px';
  newTable.style.border = '1px solid black';

  document.body.appendChild(newTable);
  let formKeys = Object.keys(noteDB[0]);
  formKeys.forEach(element => {
    let row = newTable.insertRow();
    console.log(element);
  });
}

function updateTable() {
  let newTable = document.getElementById('note-table');
  if (newTable !== undefined) {
    createTable();
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  sendData();
  updateTable();
});