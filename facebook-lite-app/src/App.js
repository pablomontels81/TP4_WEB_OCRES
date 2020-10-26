
import React from 'react';

import './App.css';

import ButtonUser from './buttonUser';
import UserRecap from './UserRecap';


class App extends React.Component {

  //Constructor 
  constructor(props) {
    super(props);
    this.state = {index : 0};
  }

  //List des utilisateurs
  users = [
    {
      name: 'Luis',
      surname: 'Vincent',
      birthyear: '27/06/1989',
      avatarpicture: 'VLuis.jpg',
    },

    {
      name: 'Mbappé',
      surname: 'Kylian',
      birthyear: '12/20/1998',
      avatarpicture: 'KMbappe.jpg',
    },

    {
      name: 'Beaugrand',
      surname: 'Cassandre',
      birthyear: '23/05/1997',
      avatarpicture: 'CBeaugrand.jpg',
    },

  ];

  //HandleCLick pour gérer changement de User
  handleClick = (newUser) => {
    this.setState(
      {
        index: newUser
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="BoutonProfile">
            {this.users.map((user, index) => 
              <ButtonUser nameid= {user.surname} userid= {index} clickHandler={this.handleClick} /> )}
          </div>
        </header>
        <UserRecap user={this.users[this.state.index]} />
      </div>
    )
  }

}

export default App;
