import React, { useState } from 'react';
import './App.css';
import Comment from './Comment/Comment.js';
import CommentList from './CommentList/CommentList.js'
import Navigation from './Navigation/Navigation.js';
import SignIn from './SignIn/SignIn.js';
import Register from './Register/Register.js'
import ParticlesBg from 'particles-bg';


const initialState = {
    route: 'home',
    isSignedIn: true,
}

class App extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }
    



    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }
    

    render() {
        const {route, isSignedIn} = this.state;
        return (
            <div className="App">
                <div className="navigation">
                    <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
                </div>
                <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
                { route === 'home' || route === 'signout'
                    ?  ( <div className="row">
                        <Comment />
                        <CommentList />
                    </div> )
                    : (
                        route === 'signin'
                            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    )
                }
            </div>
        );
    }



}

export default App;


