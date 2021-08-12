import react, { useState } from 'react';
import Singin from './Singin';
import { Link } from 'react-router-dom';
import fire from './fire';
import { useHistory } from 'react-router-dom';

function Login(props) {
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const userEnterEmail = (event) => {
        setEmail(event.target.value);
    };
    const userEnterPass = (event) => {
        setPass(event.target.value);
    };

    const tryLogin = () => {
        console.log('CLI');
    };

    const handleLogin = () => {
        fire.auth()
            .signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                props.setUser(userCredential.user);

                history.push('/Chats');
            })
            .catch((err) => {
                switch (err.code) {
                    default:
                        alert(err.code);
                        console.log(err);

                    // case 'auth/invald-email':
                    // case 'auth/user-disable':
                    // case 'auth/user-not-found':
                    //     setEmailError(err.message);
                    //     break;
                    // case 'aut/wrong-password':
                    //     setPasswordError(err.message);
                    //     break;
                }
            });
        console.log();
    };

    return (
        <>
            <div className='logInPage'>
                <div className='loginAndRegister loginSection'>
                    <label className='userNameTxt '> Email</label>
                    <input
                        required
                        type='text'
                        className='emailInput'
                        value={email}
                        onChange={(event) => userEnterEmail(event)}></input>
                    <label className='userNameTxt'> Password</label>
                    <input
                        required
                        type='password'
                        className='emailInput'
                        value={pass}
                        onChange={(event) => userEnterPass(event)}></input>

                    {email && pass ? (
                        <div className='bn6' onClick={handleLogin}>
                            Login
                        </div>
                    ) : (
                        <Link to='/Register' className='accountNo'>
                            I don t have an account yet
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default Login;
