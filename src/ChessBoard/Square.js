import React from 'react';

function Square(props) {
    const name = props.name || '?';
    const piece = props.piece || null;

    const color = props.color || 'light';

    const styles = {
        display: 'block',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#404020',
        width: props.size / 8 - 2,
        textAlign: "center",
        lineHeight: props.size / 8 - 2,
        backgroundColor: ( color === 'light' ? '#c0c080' : '#808040' )
    };

    if (piece != null) {
        styles.backgroundColor = ( color === 'light' ? '#c0c0c0' : '#808080' )
    }

    return (
        <div className="ChessBoardSquare" style={styles}>
            { name }
        </div>
    );
}

export default Square;
