import React from 'react';
import Square from './Square';

function Row(props) {
    const fen = props.fen;

    return (
        <div className="ChessBoardRow">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
}

export default Row;
