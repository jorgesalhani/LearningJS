let data_labels = [0,1,2,3,4,5]

let data_array = [1];

let data = {
  labels: data_labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: data_array,
  }]
};

let config = {
  type: 'line',
  data: data,
  options: {}
};

let myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function dataUpdate(data, data_array, data_labels) {
  data.labels = data_labels;
  data.datasets[0].data = data_array;
  myChart.destroy();
  data = {
    labels: data_labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: data_array,
    }]
  };
  
  config = {
    type: 'line',
    data: data,
    options: {
      animation: {
        duration: 0
      }
    }
  };
  
  myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  return myChart;
}

function insertData(data_array, data_labels) {
  let labels_length = data_labels.length
  let data_length = data_array.length

  let next = Math.random()*50;

  data_array.push(next);
  if (data_length > 5) {
    data_labels.push(labels_length);
  }
}

const insertDataButton = document.getElementById('isertDataButton');
insertDataButton.addEventListener('click', function(){
  insertData(data_array, data_labels)
  dataUpdate(data, data_array, data_labels);
});

function performSimulation(data_array, data_labels, simulation_end) {
  if (simulation_end <= 1) {
    return;
  }
  insertData(data_array, data_labels);
  setTimeout(function() {
    performSimulation(data_array, data_labels, simulation_end);
    dataUpdate(data, data_array, data_labels)
  }, 2*simulation_end);
  simulation_end--;
}

const initSimulation = document.getElementById('initSimulationButton');
initSimulation.addEventListener('click', function() {
  performSimulation(data_array, data_labels, simulation_end=100);
});
