

import React from 'react';
import './UserRecap.css';

class UserRecap extends React.Component{

    //Constructor 
    constructor(props) {
        super(props);
        //Mise en blanc de la couleur 
        this.state = {backgroundcolorstyle: "white"}
    }

    listColor = ["blue","green","red","yellow","brown","grey"];

    //Fonction afin de changer le backgroundcolorstyle de manière aléatoire
    
    
    getNewBackgroundColorsNumber = () => 
    {
        //Création de la nouvelle variable pour couleur de fond
        var newBackgroundColor="";
        do {
            newBackgroundColor = this.listColor[Math.floor(Math.random() * this.listColor.length)];   
        }
        //Condition pour ne pas re-tomber sur la couleur de base
        while(newBackgroundColor === this.state.backgroundcolorstyle)

        //Si couleur différente, alors changement du backgroundcolorstyle
        this.setState(
            {
                backgroundcolorstyle : newBackgroundColor
            }
        ); 
    }

    render(){

        return(
            <div style={{backgroundColor: this.state.backgroundcolorstyle}}>
                <div className="UserRecap">
                    <div className="PictureStyle">
                        
                    </div>
                    <div>
                        <p className="SurnameStyle">{this.props.user.surname}</p>
                        <p className="NameStyle">{this.props.user.name}</p>
                        <p></p>
                    </div>
                    <p> {this.props.user.birthyear}</p>
                    <div>
                        <button onClick={this.getNewBackgroundColorsNumber} className="ButtonChangeColorsStyle"> Changer la couleur du fond</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserRecap;