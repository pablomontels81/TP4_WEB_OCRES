

import './buttonUser.css';

import React from 'react';

class ButtonUser extends React.Component{

    render(){
        return (
            <button className="buttonUser" onClick={() => this.props.clickHandler(this.props.userid)}>
                <p>{this.props.nameid}</p>
            </button>
        );
    }
}

export default ButtonUser;