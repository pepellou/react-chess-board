import React from 'react';

import './ChessBoard.css';
import Row from './Row';

function ChessBoard(props) {
    const rows = props.fen.split(' ')[0].split('/');

    const boardSize = props.size || "300px";

    const styles = {
        width: boardSize,
        height: boardSize
    };
    return (
        <div className="ChessBoard" style={styles}>
        {
            rows.map(
                row => {
                    return (
                        <Row fen={row} size={styles.width} />
                    );
                }
            )
        }
        </div>
    );
}

export default ChessBoard;
