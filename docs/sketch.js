document.getElementById('button').click();

const body = document.body;

body.addEventListener('click', e => {
  console.log('clicked body');
});

console.log('Using click()');
body.click();

console.log('Using dispatchEvent');
body.dispatchEvent(new Event('click'));
