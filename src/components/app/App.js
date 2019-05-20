import React from 'react';
import PropTypes from 'prop-types';

import Candidate from '../candidate/Candidate.connect';
import Chart from '../chart/Chart.connect';

import './App.css';

const App = (props) => {
  const {
    main: { candidateCollection, voteCounts, colors }
  } = props;

  return (
    <div className="jumbotron">
      <h1 className="display-4">Voting App Test</h1>
      <p className="lead">
        Create a React application that implements voting for two candidates (of
        your choice) with the display of the ratios of votes in a Pie Chart
      </p>

      <div className={'app__layout'}>
        <div className={'app__item'}>
          <Candidate
            candidate={candidateCollection[0]}
            voteValue={voteCounts[`id_${candidateCollection[0].id}`]}
            voteTotal={voteCounts.total}
            color={colors[0]}
          />
        </div>
        <div className={'app__item'}>
          <Chart />
        </div>
        <div className={'app__item'}>
          <Candidate
            candidate={candidateCollection[1]}
            voteValue={voteCounts[`id_${candidateCollection[1].id}`]}
            voteTotal={voteCounts.total}
            color={colors[1]}
          />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  main: PropTypes.object.isRequired
};

export default App;
