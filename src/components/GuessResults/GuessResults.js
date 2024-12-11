import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        return <Guess className="guess" key={row} data={guesses[row]}></Guess>;
      })}
    </div>
  );
}

export default GuessResults;
