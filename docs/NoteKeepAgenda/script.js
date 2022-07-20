const form = document.getElementById('note-form');

function sendData() {  
  for (let i = 0; i < form.length; i++) {
    
    console.log(i);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  sendData();
});