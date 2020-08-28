import React from 'react';

function Square(props) {
    const styles = {
        width: props.size / 8 - 2
    };
    return (
        <div className="ChessBoardSquare" style={styles}> </div>
    );
}

export default Square;
