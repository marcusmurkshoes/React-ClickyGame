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
imagesClicked: []

  };
 handleIncrement = id => {
this.shufflePictures();
    if(this.state.imagesClicked.includes(id)) {

      if(this.state.score > this.state.topScore) {
        this.setState({ score: 0, imagesClicked: [], topScore: this.state.score });
      }
      else {
        this.setState({ score: 0, imagesClicked: [] });
      }

    }
    else {
        this.setState({ score: this.state.score + 1, imagesClicked: [...this.state.imagesClicked, id]});
    console.log(this.state.score);


    }

  };

  shufflePictures = () => {

let randomUsers = [...this.state.users];
for(let i = 0; i < randomUsers.length; i++) {
  const temp = randomUsers[i];
  let j = Math.floor(Math.random() * randomUsers.length);
  randomUsers[i] = randomUsers[j];
  randomUsers[j] = temp;
} 

this.setState({ users: randomUsers }); 

  }


 
//Function for when same picture is clicked 

// Shuffle pictures aruond after picture is clicked

// Add to the score when you when
// High score
  render() {
    return (
     <div>

<Navbar score={this.state.score} topScore={this.state.topScore} />
<Jumbotron />
<Content>
{this.state.users.map(users => (<ClickyGame name={users.name}
            image={users.image}
            id={users.id}
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