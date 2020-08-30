import React from 'react';

import whiteKing   from './pieces/wk.svg';
import whiteQueen  from './pieces/wq.svg';
import whiteRook   from './pieces/wr.svg';
import whiteBishop from './pieces/wb.svg';
import whiteKnight from './pieces/wn.svg';
import whitePawn   from './pieces/wp.svg';
import blackKing   from './pieces/bk.svg';
import blackQueen  from './pieces/bq.svg';
import blackRook   from './pieces/br.svg';
import blackBishop from './pieces/bb.svg';
import blackKnight from './pieces/bn.svg';
import blackPawn   from './pieces/bp.svg';

function Square(props) {
    const name = props.name || '';

    const chess = props.chess;

    const color = chess.square_color(name);

    const piecesImages = {
        w: {
            k: whiteKing,
            q: whiteQueen,
            r: whiteRook,
            b: whiteBishop,
            n: whiteKnight,
            p: whitePawn
        },
        b: {
            k: blackKing,
            q: blackQueen,
            r: blackRook,
            b: blackBishop,
            n: blackKnight,
            p: blackPawn
        }
    };

    const styles = {
        display: 'block',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#404020',
        width: props.size / 8 - 2,
        height: props.size / 8 - 2,
        textAlign: "center",
        lineHeight: props.size / 8 - 2,
        backgroundColor: ( color === 'light' ? '#c0c080' : '#808040' ),
        float: 'left'
    };

    const pieceStyles = {
        width: props.size / 8 - 2,
        height: props.size / 8 - 2
    };

    let image = null;

    const piece = chess.get(name)

    if (piece != null) {
        image = piecesImages[piece.color][piece.type];
    }

    return (
        <div className="ChessBoardSquare" style={styles}>
            <div style={pieceStyles}>
                <img src={image} style={{float: "left"}} />
            </div>
        </div>
    );
}

export default Square;
