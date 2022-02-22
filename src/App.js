import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        // {
        //   id: 1,
        //   name: 'Frankenstein'
        // },
        // {
        //   id: 2,
        //   name: 'Dracula'
        // },
        // {
        //   id: 3,
        //   name: 'Zombie'
        // },
      ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(
            monster => <h1 key={monster.id}>{ monster.name }</h1>
          )
        }
      </div>
    );
  }
}

export default App;
