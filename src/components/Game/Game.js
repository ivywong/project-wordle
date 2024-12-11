import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleAddGuess(guess) {
    const newGuess = {
      guess: checkGuess(guess, answer),
      id: crypto.randomUUID(),
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <Banner gameStatus={gameStatus} answer={answer} guesses={guesses}></Banner>
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus}></GuessInput>
    </>
  );
}

export default Game;
