import logo from './logo.svg';
import './CSS/App.css';
import './CSS/messages.css';
import './CSS/chatDetails.css';
import firebase from 'firebase/app';

import { useEffect, useState } from 'react';
import AfterLogin from '../src/components/AfterLogin';
import Login from './components/Login';
import Singin from './components/Singin';
import UserPage from './components/UserPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import UserMessages from './components/UserMessages';

function App(props) {
    const [user, setUser] = useState('');
    const [actualUser, setActualUser] = useState();

    useEffect(() => {
        console.log(user + ' user');
    }, [user]);

    return (
        <>
            <Router>
                <div className='App'>
                    <Route exact path='/'>
                        <Redirect to='/Login' />{' '}
                    </Route>

                    {/* <Route
                        path='/login'
                        render={(props) => (
                            <Login setUser={setUser} {...props} />
                        )}
                    /> */}
                    <Route path='/login'>
                        {' '}
                        <Login setUser={setUser} />
                    </Route>
                    <Route path='/Register' component={Singin} exact />

                    <Route path='/Chats'>
                        {' '}
                        <AfterLogin user={user} />{' '}
                    </Route>
                    {/* <Route path='/Chats/aa' component={UserMessages} /> */}
                    <Route path='/UserPage' component={UserPage}></Route>

                    <Route path='/Chats/'></Route>
                    {/* <Route path='/SendEmail' component={SendEmail} exact /> */}
                </div>
            </Router>

            {/* <button onClick={handleLogin}>FKING CLICK IT</button> */}
        </>
    );
}

export default App;
