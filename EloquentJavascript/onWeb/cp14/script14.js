function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else 
  if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, 'book'));
// -> true

let link = document.body.getElementsByTagName('a')[0];
// console.log(link.href);

function replaceImages() {
  let images = document.body.getElementsByTagName('img');
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

let paras = document.body.getElementsByTagName('p');
for (let para of Array.from(paras)) {
  if (para.getAttribute('data-classified') == 'secret') {
    para.remove();
  }
}

let para = document.body.getElementsByTagName('p')[0];
console.log('clientHeight: ', para.clientHeight);
console.log('offsetHeight: ', para.offsetHeight);
console.log('PrecisePosition: ', para.getBoundingClientRect());

function time(name, action) {
  let start = Date.now();
  action();
  console.log(name, 'took', Date.now() - start, 'ms');
}

// read and change DOM layout at each step
time('naive', () => {
  let target = document.getElementById('one');
  for (let i = 0; i < 20000; i++){
    target.appendChild(document.createTextNode('X'));
  }
});
// 30ms

// change DOM layout once, with the same X value
time('clever', () => {
  let target = document.getElementById('one');
  target.appendChild(document.createTextNode('XXX'));
  target.firstChild.nodeValue = 'X'.repeat(20000);
})
// 1ms