import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { 
    advice: ' ',
  }
  componentDidMount() {
    this.fetching();
  }
  fetching = () => {
    axios.get('https://api.adviceslip.com/advice')
         .then((res) => {
          const { advice } = res.data.slip;
          this.setState({advice});
         })
         .catch((err) => {
          console.log(err);
         });
  }
  render() {
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='title'>{this.state.advice}</h1>
          <button className="button" onClick={this.fetching}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;
