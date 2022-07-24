const xhr = new XMLHttpRequest();

let form = document.querySelector('form');

async function searchDefinition() {
  let word = form.querySelector('#word').value;
  // Using API from URL: https://api.dicionario-aberto.net/index.html
  let url = new URL(`https://api.dicionario-aberto.net/word/${word}`);
  xhr.open('GET', url, true);
  xhr.send();
  let resp = new Map();
  xhr.onload = function() {
    // console.log(`Loaded: ${xhr.status} ${xhr.response}`);
    resp.set('status', xhr.status);
    resp.set('response', xhr.response);
  }
  xhr.onerror = function() {
    alert('Network error');
  }
  return resp;
}

function displayDefinition(definition) {
  console.log(definition);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let definition = await searchDefinition();
  displayDefinition(definition);
})
