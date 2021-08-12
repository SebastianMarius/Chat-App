import react, { useState } from 'react';
import fire from './fire';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import database from 'firebase/app';

function Singin() {
    let history = useHistory();
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPass, setRegisterPass] = useState('');
    const [registerConfPas, setRegisterConfPas] = useState('');

    const addUserDb = (userCredential) => {
        database
            .firestore()
            .collection('users')
            .doc(userCredential.user.uid)
            .set({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                chats: [],
            });

        database
            .firestore()
            .collection('users')
            .doc(userCredential.user.uid)
            .collection('chats')
            .doc('chats')
            .set({
                chats: [],
            });
    };

    const handleSingup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(registerEmail, registerPass)
            .then((userCredential) => {
                addUserDb(userCredential);
                history.push('/Login');
                console.log('MERE');
            })
            .catch((err) => {
                switch (err.code) {
                    default:
                        console.log(err.message);
                }
            });
    };

    return (
        <>
            <div className='logInPage'>
                <div className='loginAndRegister RegisterSection'>
                    <div className='registerTitle'>Register</div>

                    <div className='form firstForm'>
                        <input
                            type='text'
                            name='email'
                            required
                            autoComplete='off'
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />

                        <label htmlFor='name' className='label-name'></label>
                        <span className='content-name'>Email</span>
                    </div>

                    <div className='form secondForm'>
                        <input
                            type='password'
                            name='name'
                            required
                            value={registerPass}
                            onChange={(e) => setRegisterPass(e.target.value)}
                        />
                        <label htmlFor='name' className='label-name'></label>
                        <span className='content-name'>Password</span>
                    </div>

                    <div className='form secondForm'>
                        <input
                            type='password'
                            name='name'
                            required
                            value={registerConfPas}
                            onChange={(e) => setRegisterConfPas(e.target.value)}
                        />
                        <label htmlFor='name' className='label-name'></label>
                        <span className='content-name'>Confirm Password</span>
                    </div>
                    <div className='registerPgButtons'>
                        <a href='/Login' className='bn3 secondButtonReg'>
                            Back to login
                        </a>
                        <a className='bn3' onClick={handleSingup}>
                            Sing-in
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Singin;
