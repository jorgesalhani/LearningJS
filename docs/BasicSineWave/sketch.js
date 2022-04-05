let data_array = [0];
let data_index = [0];
let values_e = [2.7182];

let chart_data = {
    type: 'line',
    labels: data_index,

    datasets: [{
        label: 'Aproximação constante e',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data_array
    },
    {
        label: 'Constante e',
        backgroundColor: 'rgb(255, 255, 255)',
        borderDash: [1,5],
        borderColor: 'rgb(0, 0, 0)',
        data: values_e,
    }]
}

let delayed;

let config = {
    type: 'line',
    data: chart_data,
    options: {
        animation: {
            duration: 1000
        },
        annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 5,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 4,
              label: {
                enabled: false,
                content: 'Test label'
              }
            }]
          }
    }
}

let myChart = new Chart(
    document.getElementById('myChart'),
    config
)

function insertData(data_array, data_index) {
    let index_length = data_index.length;

    let n = data_index[index_length-1]
    let argument = 1 + 1/n;
    let next = Math.pow(argument, n);

    data_array.push(next);
    data_index.push(index_length);
}

function dataUpdate(chart_data, data_array, data_index) {
    chart_data.labels = data_index;
    chart_data.datasets[0].data = data_array;
    for (let i = 0; i < data_array.length; i++) {
        values_e.push(2.718);
    }
    chart_data.datasets[1].data = values_e;
    myChart.destroy();
    let data = {
        labels: data_index,
        datasets: [{
            label: 'Aproximação constante e',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.4,
            data: data_array,
        },
        {
            label: 'Constante e',
            backgroundColor: 'rgb(255, 255, 255)',
            borderDash: [1,5],
            borderColor: 'rgb(0, 0, 0)',
            data: values_e,
        }]
    };
    
    config = {
        type: 'line',
        data: data,
        options: {
            animation: {
                duration: 0
              },
            annotation: {
                annotations: [{
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 2.71,
                  borderColor: 'rgb(75, 192, 192)',
                  borderWidth: 4,
                  label: {
                    enabled: false,
                    content: 'Test label'
                  }
                }]
              }
        }
    };
    
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    return myChart;
}


function performSimulation(data_array, data_index, simulation_end) {
    if (simulation_end <= 1) {
        return;
    }

    let secondsTimeout = 8*simulation_end;

    insertData(data_array, data_index);
    setTimeout(() => {
        performSimulation(data_array, data_index, simulation_end);
        myChart = dataUpdate(chart_data, data_array, data_index);
    }, secondsTimeout);

    simulation_end--;
}

const initData = document.getElementById('insertData');
initData.addEventListener('click', () => {
    insertData(data_array, data_index);
    myChart = dataUpdate(chart_data, data_array, data_index);
});

const initSimulation = document.getElementById('initSimulation');
initSimulation.addEventListener('click', function(){
    performSimulation(data_array, data_index, simulation_end=50);
});


