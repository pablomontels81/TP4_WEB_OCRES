import React from 'react';
import './UserTweet.css';

class UserTweet extends React.Component {
    //Constructor 
    constructor(props) {
        super(props);
        //Mise en blanc de la couleur 
        this.state = {nbrelike: 0}
    }

    ImplementNbreLike = () => 
    {
        //Implémentation du nombre de like 
        this.setState(
            {
                nbrelike : this.state.nbrelike + 1
            }
        ); 
    }

    render() {
        
        return (
            <div>
                <p className="TweetStyle" onClick={this.ImplementNbreLike}>
                    {this.state.nbrelike}👍
                </p>
                <p className="TweetStyle">{this.props.user.tweet}</p>
            </div>
        )
    }
}

export default UserTweet;