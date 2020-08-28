import React from 'react';
import Square from './Square';

function Row(props) {
    const fen = props.fen;
    const styles = {
        width: props.size
    };

    return (
        <div className="ChessBoardRow" style={styles}>
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
            <Square size={styles.width} />
        </div>
    );
}

export default Row;
