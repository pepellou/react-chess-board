import React from 'react';
import Square from './Square';

function Row(props) {
    const name = props.name || '?';

    const chess = props.chess;

    const styles = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
        width: props.size
    };

    const squares = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(
        (file) => (
            <Square piece={chess.get(file + name)} size={styles.width} name={file + name} color={chess.square_color(file + name)} chess={chess} />
        )
    );

    return (
        <div className="ChessBoardRow" style={styles}>
            { squares }
        </div>
    );
}

export default Row;
