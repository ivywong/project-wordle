import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddGuess(tentativeGuess);
    setTentativeGuess('');
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
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
