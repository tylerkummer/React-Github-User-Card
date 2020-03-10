import React from 'react';
import axios from "axios";
import Followers from "./Followers";

class App extends React.Component {
  state={
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tylerkummer/followers')
    .then(response => {
      console.log(response)
      this.setState({
        followers: response.data
      })
    })
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;