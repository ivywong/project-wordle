import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        const guess = guesses.length > row ? guesses[row].guess : '';
        return <Guess className="guess" key={row} value={guess}></Guess>;
      })}
    </div>
  );
}

export default GuessResults;
