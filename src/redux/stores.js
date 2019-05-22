import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

//import Product from "./Product";

class Stores extends React.Component {
  constructor() {
    super();
    this.state = {
      INITIAL_STATE: {}
    };
  }

  componentWillMount() {
    // this.state = {};
    const datas = {};
    axios
      .get('http://localhost:3000/post.json')
      .then(function(response) {
        // handle success
        console.log('response', response);
        console.log('response.data', response.data);
        this.SetState = response.data;
        this.setState({ datas: JSON.parse(response.data) });
        console.log('this.state Stores', this.state);
        console.log('this.state datas', datas);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    // console.log("this.state Stores", this.state);
    // console.log("axios.data Stores", axios.data);
    // console.log("axios.data Stores", this.state);
    // console.log("response.data Stores", datas);

    //   axios
    //     .get("http://localhost:3000/post.json'")
    //     .then(({ data }) => {
    //       this.setState({
    //         INITIAL_STATE: data
    //       });
    //     });
    //     console.log("comp Stores", this.state);
    //     console.log("comp Stores", axios.data);
  }

  render() {
    return (
      <div className="voting">
        {/* {this.state.INITIAL_STATE.map((candidateCollection, voteCounts, i) => (
          <div>
            key={i}
            name={candidateCollection.name}>
            
            
            </div> */}
        ))}
      </div>
    );
  }
}

export default Stores;
