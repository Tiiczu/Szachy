// script.js
const chessboard = document.querySelector('.chessboard');

// Generate squares
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    chessboard.appendChild(square);
}

// Add pieces
const pieces = [
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'
];

pieces.forEach((piece, index) => {
    const square = chessboard.children[index];
    if (piece !== '') {
        const pieceElement = document.createElement('span');
        pieceElement.classList.add('piece');
        pieceElement.textContent = piece;
        square.appendChild(pieceElement);
    }
});

// Make pieces movable
const piecesElements = document.querySelectorAll('.piece');

piecesElements.forEach((piece) => {
    piece.addEventListener('mousedown', (e) => {
        const pieceRect = piece.getBoundingClientRect();
        const pieceX = pieceRect.left;
        const pieceY = pieceRect.top;
        const pieceWidth = pieceRect.width;
        const pieceHeight = pieceRect.height;

        const mouseMoveHandler = (e) => {
            piece.style.position = 'absolute';
            piece.style.top = `${e.clientY - pieceHeight / 2}px`;
            piece.style.left = `${e.clientX - pieceWidth / 2}px`;
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});