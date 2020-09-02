import React from 'react';
import Square from './Square';

function Row(props) {
    const name = props.name || '?';

    const chess = props.chess;

    const styles = {
        display: 'block',
        width: props.size,
        height: props.size / 8,
        float: 'left'
    };

    const squares = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(
        (file) => (
            <Square key={'square_' + file + name} size={styles.width} name={file + name} chess={chess} />
        )
    );

    return (
        <div className="ChessBoardRow" style={styles}>
            { squares }
        </div>
    );
}

export default Row;
