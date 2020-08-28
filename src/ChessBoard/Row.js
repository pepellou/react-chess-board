import React from 'react';
import Square from './Square';

function Row(props) {
    const name = props.name || '?';

    const styles = {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
        width: props.size
    };

    const getColorOfSquare = (file, row) => ((file.charCodeAt(0) - 'a'.charCodeAt(0) + row) % 2 === 0) ? 'light' : 'dark';

    const squares = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(
        (file) => (
            <Square size={styles.width} name={file + name} color={getColorOfSquare(file, name)} />
        )
    );

    return (
        <div className="ChessBoardRow" style={styles}>
            { squares }
        </div>
    );
}

export default Row;
