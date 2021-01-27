import { getPokeStats } from '../utils/localStorageUtils.js';
import { findById } from '../utils/utils.js';
import { renderTableRow } from './rendertbody.js';
import { makeLabelsArray, makeSeenArray, makeCaughtArray } from './mungeUtils.js';


// render function to get tr's and td's 
const getStats = getPokeStats();

const tbody = document.querySelector('tbody');
for (let item of getStats) {
    const newRow = findById(getStats, item._id);
    const dom = renderTableRow(newRow);
    tbody.append(dom);
}


const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../index.html';
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: ['ads', 'erer', 'gdf'], // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: ['2', '3', '4'], // DATA ARRAY GOES HERE
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
            {
                label: '# of times caught',
                data: ['2', '3', '4'], // DATA ARRAY GOES HERE
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
