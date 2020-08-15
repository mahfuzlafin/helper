import React, {Component} from 'react';
import './App.css';
import {signInWithGoogle} from './firebase/firebase.utils';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        currentUser: null,
    };

    componentDidMount() {
        auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            } else {
                this.setState({
                    currentUser: userAuth,
                });
            }
        });
    }

    render() {
        return (
            <div className='App'>
                <br />
                <Button
                    onClick={signInWithGoogle}
                    variant='contained'
                    color='primary'
                >
                    Signin With Google
                </Button>
                {/* <br />
                <br /> */}
                <span> </span>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => {
                        auth.signOut();
                        console.clear();
                    }}
                >
                    Signout
                </Button>
                {/* <h1>{this.state.currentUser.id}</h1> */}
            </div>
        );
    }
}

export default App;
