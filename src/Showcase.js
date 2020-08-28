import React from 'react';

import ChessBoard from './ChessBoard/ChessBoard';

function Showcase() {
    return (
        <main>
            <article>
                <h2>Default board</h2>
                <ChessBoard />
            </article>
            <article>
                <h2>Specifying a FEN</h2>
                <ChessBoard fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' />
            </article>
        </main>
    );
}

export default Showcase;
