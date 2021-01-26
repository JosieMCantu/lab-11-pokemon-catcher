import { getPokeStats } from '../utils/localStorageUtils.js';
import { findById } from '../utils/utils.js';
import { renderTableRow } from './rendertbody.js';


// render function to get tr's and td's 
const getStats = getPokeStats();

const tbody = document.querySelector('tbody');
for (let item of getStats) {
    const newRow = findById(getStats, item._id);
    const dom = renderTableRow(newRow);
    tbody.append(dom);
}

// Render tr
const tr = document.createElement('td');

// Render td's
const tdEmpty1 = document.createElement('td');
tr.append(tdEmpty1);

const tdEmpty2 = document.createElement('td');
tr.append(tdEmpty2);
tbody.append(tr);

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../index.html';
});




var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
// makeSeenArray
// makeCaughtArray
// makeLabelsArray
