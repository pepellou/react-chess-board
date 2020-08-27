import React, { useState } from 'react';

import ChessBoard from './ChessBoard/ChessBoard';

function Showcase() {
  const [ fen, setFEN ] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  return (
    <ChessBoard fen={fen} />
  );
}

export default Showcase;
