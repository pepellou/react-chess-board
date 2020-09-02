import React, { useState } from 'react';
import Chess from 'chess.js';

import Row from './Row';

function ChessBoard(props) {
    const startingPositionFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

    const [ chess, setChess ] = useState(new Chess(props.fen || startingPositionFEN));

    const boardSize = props.size || 360;

    const styles = {
        display: 'block',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: '#404020',
        width: boardSize,
        height: boardSize,
        float: 'left'
    };

    const rows = [8, 7, 6, 5, 4, 3, 2, 1].map(
        (row) => (
            <Row name={row} size={styles.width} chess={chess} />
        )
    );

    return (
        <div>
            <div className="ChessBoard" style={styles}>
                { rows }
            </div>
            <footer style={{width: "100%", float: "left"}}> { chess.turn() === 'w' ? 'White' : 'Black' } to move </footer>
        </div>
    );
}

export default ChessBoard;
