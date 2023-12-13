let fields = [
    'O', null, null,
    null, null, null,
    null, null, null
];

let currentPlayer = 'cross'; // Start mit "cross"

function render() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            cell.textContent = fields[i * 3 + j] === null ? '' : fields[i * 3 + j];
            cell.addEventListener('click', () => handleCellClick(i, j));
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function handleCellClick(row, col) {
    const index = row * 3 + col;

    if (fields[index] === null) {
        if (currentPlayer == 'cross') {
            fields[index] = 'X';
        }
        if (currentPlayer == 'circle') {
            fields[index] = 'O';
        }
        currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross'; // Wechsle zwischen "cross" und "circle"
        render();
    }
}

// Initialisierung beim Laden der Seite
window.onload = render;
