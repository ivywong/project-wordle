import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        title="Must be a 5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
