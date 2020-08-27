import React from 'react';

import './ChessBoard.css';
import Row from './Row';

function ChessBoard(props) {
    const rows = props.fen.split(' ')[0].split('/');
    return (
        <div className="ChessBoard">
        {
            rows.map(
                row => {
                    return (
                        <Row fen = {row} />
                    );
                }
            )
        }
        </div>
    );
}

export default ChessBoard;
