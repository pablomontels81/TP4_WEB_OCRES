
import React from 'react';

import './App.css';

import ButtonUser from './buttonUser';
import UserRecap from './UserRecap';
import UserTweet from './UserTweet';

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
      avatarpicture: 'VLuis',
      tweet: 'Fin prêt pour aller gagner mon deuxième titre de Champion du Monde !'
    },

    {
      name: 'Mbappé',
      surname: 'Kylian',
      birthyear: '12/20/1998',
      avatarpicture: 'KMbappe',
      tweet: 'Je suis fière de pouvoir évoluer à ce niveau et je remercie mon club pour cela'
    },

    {
      name: 'Beaugrand',
      surname: 'Cassandre',
      birthyear: '23/05/1997',
      avatarpicture: 'CBeaugrand',
      tweet: 'La récupération se passe bien, maintenant direction Tokyo 2021 en espérant que le Covid ne nous laisse pas sur notre faim'
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
        <UserTweet user={this.users[this.state.index]} />
      </div>
    )
  }

}

export default App;
