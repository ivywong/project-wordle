import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((col) => (
        <span className="cell" key={col}>
          {value !== '' && value[col]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
