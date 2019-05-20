import { INCREASE_COUNTER } from './actions';
import axios from 'axios';

// Make a request for a user with a given ID
axios
  .get('http://localhost:3000/post.json')
  .then(function(response) {
    // handle success
    console.log('response', response);
    console.log('dani', response.data);
    const candidateCollection = response.data;
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

const INITIAL_STATE = 

 {
  candidateCollection: [
    {
      id: 0,
      name: 'Tramp'
    },
    {
      id: 1,
      name: 'Klinton'
    }
  ],
  colors: ['#6f42c1', '#fd7e14'],
  voteCounts: {
    id_0: 0,
    id_1: 0,
    total: 0
  }
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        voteCounts: {
          ...state.voteCounts,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
