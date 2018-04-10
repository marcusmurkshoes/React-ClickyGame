import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import ClickyGame from './components/ClickyGame';
import Content from './components/Content';
import Footer from './components/Footer';
import users from "./users.json";

class App extends Component {
  state = {
  	users,
score: 0,
topScore: 0,
picture: []
  };
 handleIncrement = () => {

  	this.setState({ score: this.state.score + 1});
    console.log(this.state.sore);
  };


  render() {
    return (
     <div>

<Navbar score={this.state.score} topScore={this.state.topScore} />
<Jumbotron />
<Content>
{this.state.users.map(users => (<ClickyGame name={users.name}
            image={users.image}
            score={this.state.score}
            key={users.id}
            handleIncrement={this.handleIncrement}
            occupation={users.occupation}/>))}


</Content>
<Footer />

</div>
    )
  };
}

export default App;