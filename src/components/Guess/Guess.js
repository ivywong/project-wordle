import React from 'react';

import { range } from '../../utils';

function Guess({ data }) {
  return (
    <p className="guess">
      {range(5).map((col) => (
        <span className={`cell ${data && data.guess[col].status}`} key={col}>
          {data && data.guess[col].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
