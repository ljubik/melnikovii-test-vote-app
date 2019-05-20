import * as React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';

import './Chart.css';

const Chart = (props) => {
  const { voteCounts, colors } = props;
  console.log('chart', props);
  const data = [
    {
      value: voteCounts.id_0
    },
    {
      value: voteCounts.id_1
    }
  ];

  return (
    <div className={'chart__wrapper'}>
      <PieChart width={280} height={280}>
        <Pie
          data={data}
          dataKey={'value'}
          nameKey={'name'}
          cx={'50%'}
          cy={'50%'}
          innerRadius={80}
          outerRadius={100}
          fill={'#82ca9d'}
          label
        >
          {data.map((e, i) => (
            <Cell key={`cell-${i}`} fill={colors[i]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

Chart.propTypes = {
  voteCounts: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired
};

export default Chart;
