import React from 'react';

import ChessBoard from './ChessBoard/ChessBoard';

function Showcase() {
    return (
        <main>
            <article style={{width: "100%", float: "left"}}>
                <h2>Default board</h2>
                <ChessBoard />
            </article>
            <article style={{width: "100%", float: "left"}}>
                <h2>Specifying a FEN</h2>
                <ChessBoard fen='8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 2 47' />
            </article>
        </main>
    );
}

export default Showcase;
