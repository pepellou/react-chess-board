import React from 'react';
import ReactDOM from 'react-dom';

import Showcase from './Showcase/Showcase';
import ChessBoard from './ChessBoard/ChessBoard';

const articleStyles = {
    float: 'left',
    width: '100%'
};

function handlePositionChange(fen) {
    if (fen == undefined) {
        console.log('No FEN :(');
    } else {
        console.log(fen);
    }
};

ReactDOM.render(
    <main>
        <article style={articleStyles}>
            <h2>Default board</h2>
            <Showcase>
                <ChessBoard />
            </Showcase>
        </article>
        <article style={articleStyles}>
            <h2>Specifying a FEN</h2>
            <Showcase>
                <ChessBoard fen='8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 2 47' />
            </Showcase>
        </article>
        <article style={articleStyles}>
            <h2>Specifying a FEN</h2>
            <Showcase>
                <ChessBoard fen='8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 2 47' onPositionChange={handlePositionChange} />
            </Showcase>
        </article>
    </main>,
    document.getElementById('root')
);
