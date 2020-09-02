import React from 'react';
import ReactDOM from 'react-dom';

import Showcase from './Showcase/Showcase';
import ChessBoard from './ChessBoard/ChessBoard';

ReactDOM.render(
    <main>
        <article style={{float: 'left', width: '100%'}}>
            <h2>Default board</h2>
            <Showcase>
                <ChessBoard />
            </Showcase>
        </article>
        <article style={{float: 'left', width: '100%'}}>
            <h2>Specifying a FEN</h2>
            <Showcase>
                <ChessBoard fen='8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 2 47' />
            </Showcase>
        </article>
    </main>,
    document.getElementById('root')
);
