// window.addEventListener('click', () => {
//   console.log('Hello!');
// })

let button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('Button clicked');
// });

function once() {
  console.log('Once');
  button.removeEventListener('click', once);
}

// button.addEventListener('click', once);

button.addEventListener('mousedown', event => {
  if (event.button == 0) {
    console.log('Left button');
  } else
  if (event.button == 1) {
    console.log('Middle button');
  } else 
  if (event.button == 2) {
    console.log('Right button');
  }
})

let para = document.querySelector('p');

para.addEventListener('mousedown', () => {
  console.log('Handler for paragraph');
});
button.addEventListener('mousedown', event => {
  console.log('Handler for button');
  if (event.button == 2) event.stopPropagation();
})

window.addEventListener('keydown', event => {
  if (event.key == 'v') {
    document.body.style.background = 'violet';
  }
});

window.addEventListener('keyup', event => {
  if (event.key == 'v') {
    document.body.style.background = '';
  }
})

// window.addEventListener('click', event => {
//   let dot = document.createElement('div');
//   dot.className = 'dot';
//   dot.style.left = (event.pageX - 4) + 'px';
//   dot.style.top = (event.pageY - 4) + 'px';
//   document.body.appendChild(dot);
// });

let lastX;
let bar = document.querySelector('div');
bar.addEventListener('mousedown', event => {
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener('mousemove', moved);
    event.preventDefault();
  }
});

function moved(event) {
  if (event.buttons == 0) {
    window.removeEventListener('mousemove', moved);
  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + 'px';
    lastX = event.ClientX;
  }
}

let squareWorker = new Worker('squareworker.js');
squareWorker.addEventListener('message', event => {
  console.log('The worker responded: ', event.data);
});

squareWorker.postMessage(19);
squareWorker.postMessage(259);


let textarea = document.querySelector('textarea');
let timeout;
textarea.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log('Typed!'), 500);
});

let scheduled = null;
window.addEventListener('mousemove', event => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event;
})