const xhr = new XMLHttpRequest();

let form = document.querySelector('form');

async function searchDefinition() {
  let word = form.querySelector('#word').value;
  let url = new URL(`https://pt.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='${word}'`);
  let respJSON = {};
  const resp = await fetch(url, {
    method: 'GET',
    headers: {}
  });

  if (!resp.ok) {
    alert('Oops! Network error');
  }

  try {
    respJSON = resp.json();
  } catch {
    alert('Oops! JSON parse error');
  }

  return respJSON;
}

async function getPageContent(wikiResponseJSON) {
  let pagesObject = wikiResponseJSON.query.pages;
  let firstTitle = Object.values(pagesObject)[0]['title']
  let url = new URL(`http://pt.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&page=${firstTitle}&format=json`)
  let respJSON = {};
  const resp = await fetch(url, {
    methdo: 'GET',
    headers: {}
  });

  try {
    respJSON = resp.json();
  } catch {
    console.error('Oops! JSON parse error');
  }

  return respJSON;
}

async function getPageText(pageResponse) {
  let pageText = '';
  try {
    pageText = pageResponse['parse']['text'];
  } catch {
    console.error('Oops! Get page text error');
  }
  return pageText;
}

async function getFirstParagraph(pageText) {
  console.log(pageText);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let wikiResponseJSON = await searchDefinition();
  let firstPageResponse = await getPageContent(wikiResponseJSON);
  let pageText = await getPageText(firstPageResponse);
  await getFirstParagraph(pageText['*']);
})
