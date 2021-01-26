
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
    const stringyStats = JSON.stringify(stats);
    localStorage.setItem(POKESTATS, stringyStats);
    location.reload();
    location.href = './index.html';
});