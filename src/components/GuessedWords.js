import React from 'react';
import propTypes from 'prop-types';

const GuessedWords = (props) => {
  return <div></div>;
};

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
