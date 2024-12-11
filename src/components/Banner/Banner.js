import React from 'react';

function Banner({ gameStatus, answer, guesses }) {
  const classMap = {
    won: 'happy',
    lost: 'sad',
    running: '',
  };

  return (
    <div className={`${classMap[gameStatus]} banner`}>
      {gameStatus === 'won' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`}
          </strong>
          .
        </p>
      )}
      {gameStatus === 'lost' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
