let fifteen = Promise.resolve(15);

fifteen.then(value => {
  console.log(`Got ${value}`)
});

new Promise((_, reject) => { 
  reject(new Error('Fail'))
})
  .then(value => console.log('Handler 1'))
  .catch(reason => {
      console.log('Caught failure ' + reason);
      return 'nothing';
    })
  .then(value => console.log('Handler 2', value));

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;

    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });

      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout('Timed out'));
      }, 250);
    }

    attempt(1);
  })
}

// function requestType(name, handler) {
//   defineRequestType(name, (nest, content, source, callback) => {
//     try {
//       Promise.resolve(handler(nest, content, source))
//         .then(
//           response => callback(null, response),
//           failure => callback(failure)
//         );
//     } catch (exception) {
//       callback(exception);
//     }
//   });
// }

// requestType('ping', () => 'pong');

// function availableNeighbors(nest) {
//   let requests = nest.neighbors.map(neighbor => {
//     return request(nest, neighbor, 'ping')
//       .then(() => true, () => false);
//   });

//   return Promise.all(request).then(result => {
//     return nest.neighbors.filter((_, i) => result[i]);
//   })
// }

// everywhere(nest => {
//   nest.state.gossip = [];
// });

// function sendGossip(nest, message, exceptFor = null) {
//   nest.state.gossip.push(message);
//   for (let neighbor of nest.neighbors) {
//     if (neighbor == exceptFor) continue;
//     request(nest, neighbor, 'gossip', message);
//   }
// }

// requestType('gossip', (nest, message, source) => {
//   if (nest.state.gossip.includes(message)) return;
//   console.log(`${nest.name} received gossip ${message} from ${source}`);
//   sendGossip(nest, message, source);
// })

// requestType('connections', (nest, {name, neighbors}, source) => {
//   let connections = nest.state.connections;
//   if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors)) return;
//   connections.set(name, neighbors);
//   broadcastConnections(nest, name, source);
// });

// function broadcastConnections(nest, name, exceptFor = null) {
//   for (let neighbor of nest.neighbors) {
//     if (neighbor == exceptFor) continue;
//     request(nest, neighbor, 'connections', {
//       name,
//       neighbors: nest.state.connections.get(name)
//     });
//   }
// }

// everywhere(nest => {
//   nest.state.connections = new Map();
//   nest.state.connections.set(nest.name, nest.neighbors);
//   broadcastConnections(nest, nest.name);
// })

// requestType('storage', (nest, name) => Storage(nest, name));

// function findInStorage(nest, name) {
//   return storage(nest, name).then(found => {
//     if (found != null) return found;
//     else return findInRemoteStorage(nest, name);
//   });
// }

// function network(nest) {
//   return Array.from(nest.state.connections.keys());
// }

// function findInRemoteStorage(nest, name) {
//   let sources = network(nest).filter(n => n != nest.name);
//   function next() {
//     if (sources.lenght == 0) {
//       return Promise.reject(new Error('Not found'));
//     } else {
//       let source = sources[Math.floor(Math.random() * sources.length)];
//       sources = sources.filter(n => n != source);
//       return routeRequest(nest, source, 'storage', name)
//         .then(value => value != null ? value : next(), next);
//     }
//   }
//   return next();
// }

// ASYNC - AWAIT
// async function findInStorage(nest, name) {
//   let local = await storage(nest, name);
//   if (local != null) return local;

//   let sources = network(nest).filter(n => n != nest.name);
//   while (sources.length > 0) {
//     let source = sources[Math.floor(Math.random() * sources.length)];
//     sources = sources.filter(n => n != source);

//     try {
//       let found = await routeRequest(nest, source, 'storage', name);
//       if (found != null) return found;
//     } catch (_) {}
//   }
//   throw new Error ('Not found');
// }

// GENERATORS
function* powers(n) {
  for (let current = n;; current *= n) {
    yield current;
  }
}

for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}

let start = Date.now();
setTimeout(() => {
  console.log('Timeout ran at', Date.now() - start), 20
});

while (Date.now() < start + 20) {}
console.log('Wasted time until', Date.now() - start);