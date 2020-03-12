import React from 'react';
import axios from "axios";
import Followers from "./Followers";
import Self from "./Self";

class App extends React.Component {
  state={
    profile: [],
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tylerkummer')
    .then(response => {
      console.log(response)
      this.setState({
        profile: response.data
      })
    })
    .catch(error => console.log(error.message))

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
        <Self profile={this.state.profile}/>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;