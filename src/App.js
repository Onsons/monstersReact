import React , {Component} from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';

export class App extends Component {
  state = {
    monsters: []
  }
  constructor() {
    super(); 
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    return (
      <div className="App">
      <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
