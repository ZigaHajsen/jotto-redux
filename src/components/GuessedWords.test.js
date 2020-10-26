import React from 'react';

import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';

import { findByTestAttribute, checkProps } from '../../test/testUtils';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {});
describe('if there are words guessed', () => {});
