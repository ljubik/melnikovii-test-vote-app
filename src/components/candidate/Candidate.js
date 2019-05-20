import * as React from 'react';
import PropTypes from 'prop-types';

import './Candidate.css';

const Candidate = (props) => {
  const { candidate, voteValue, voteTotal, increaseCounter, color } = props;

  const buttonHandler = () => {
    increaseCounter({
      ['id_' + candidate.id]: voteValue + 1,
      total: voteTotal + 1
    });
  };

  const getVotePercent = () => {
    if (voteTotal !== 0) {
      return Math.round((voteValue / voteTotal) * 100);
    }
    return 0;
  };

  return (
    <div className={'candidate'}>
      <h4 className={'candidate__text'} style={{ color: color }}>
        {candidate.name}
      </h4>
      <p className={'candidate__text'}>{`${getVotePercent()} %`}</p>
      <p className={'candidate__text'}>
        {`Количество голосов: ${voteValue} шт.`}
      </p>
      <button className={'candidate__button'} onClick={() => buttonHandler()}>
        {'Проголосовать'}
      </button>
    </div>
  );
};

Candidate.propTypes = {
  candidate: PropTypes.any.isRequired,
  voteValue: PropTypes.number.isRequired,
  voteTotal: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Candidate;
