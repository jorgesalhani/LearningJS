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

form.addEventListener('submit', function(event) {
  event.preventDefault();
  sendData();
  updateTable();
});