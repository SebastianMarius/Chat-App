import { useEffect, useState } from 'react';
import React from 'react';
import { useHistory } from 'react-router';
// import { getAuth } from 'firebase/app';
import firebase from 'firebase/app';
import UserChats from './UserChats';
import ChatDetails from './chatDetails';
import ADDfriend from './ADDfriend';
import Test from './Test';
import UserMessages from './UserMessages';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

function AfterLogin(props) {
    const [userLogin, setUserLogin] = useState('');
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [currentUseru, setCurrentUser] = useState();
    const [chatButton, setChatButton] = useState(true);
    const [chatUID, setChatUID] = useState();

    const [buttons, setButtons] = useState({
        menuButton: { active: false },
        profileButton: { active: false },
        chatButton: { active: true },
        logoutButton: { active: false },
    });

    const history = useHistory();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
            setCurrentUser(user);
            var uid = user.uid;
            console.log(uid);
        } else {
            setCurrentUser('');
            history.push('/Login');
        }
    });

    function logOut() {
        firebase.auth().signOut();
    }

    function test() {
        console.log(firebase.auth().currentUser);
        console.log(currentUseru + 'ssss');
    }

    function NavBar() {
        return (
            <>
                <div className='menuButt'>
                    <button
                        onClick={() => {
                            setButtons({
                                ...buttons,
                                profileButton: { active: false },
                                chatButton: { active: false },
                                menuButton: { active: false },
                            });
                        }}>
                        <MenuIcon />
                    </button>
                </div>

                <div className='chatIcons'>
                    <button
                        className={
                            buttons.profileButton.active ? 'chatIconACTIVE' : ''
                        }
                        onClick={() => {
                            setButtons({
                                ...buttons,
                                profileButton: { active: true },
                                chatButton: { active: false },
                                menuButton: { active: false },
                            });
                        }}>
                        <PersonIcon />
                    </button>

                    <button
                        className={
                            buttons.chatButton.active ? 'chatIconACTIVE' : ''
                        }
                        onClick={() => {
                            setButtons({
                                ...buttons,
                                profileButton: { active: false },
                                chatButton: { active: true },
                                menuButton: { active: false },
                            });
                        }}>
                        {' '}
                        <QuestionAnswerIcon style={{}} />
                    </button>

                    <button
                        onClick={() => {
                            setButtons({
                                ...buttons,
                                profileButton: { active: false },
                                chatButton: { active: false },
                                menuButton: { active: false },
                            });
                            logOut();
                        }}>
                        <ExitToAppIcon />
                    </button>
                </div>
            </>
        );
    }

    // from  now on just WEBSITE DESIGN
    function renderAfterLogin(props) {
        return (
            <>
                <div className='AfterLogin'>
                    <div className='userUi'>
                        <div className='userNav'>{NavBar()}</div>

                        <div className='pageUserInteract'>
                            <div className='userInfoBar'>
                                <div className='messagingIcnTxt'>
                                    {
                                        <QuestionAnswerIcon
                                            style={{
                                                fontSize: 20,
                                                color: '#6545DE',
                                            }}
                                            fontSize='large'
                                            className='messaginIcn'
                                        />
                                    }
                                    <p>Messaging</p>
                                </div>
                                <div className='photoUserData'>
                                    {
                                        <NotificationsOutlinedIcon
                                            style={{
                                                color: '#FFFFFF',
                                                marginRight: '0%',
                                                position: 'relative',
                                            }}
                                        />
                                    }
                                    <div className='notificationsNumber'>1</div>
                                    <div
                                        className='userAvatar'
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/y99wLmI.jpg")`,
                                        }}></div>
                                </div>
                            </div>
                            <div className='userChatAndDetails'>
                                <div className='userChats'>
                                    {buttons.chatButton.active ? (
                                        <UserChats
                                            user={currentUseru}
                                            setChatUID={setChatUID}
                                        />
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                                <div className='actualConversation'>
                                    <UserMessages
                                        chatUID={chatUID}
                                        user={currentUseru}
                                    />
                                </div>

                                <div className='chatDetails'>
                                    <ChatDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <button onClick={test}>Click meeee</button>
            {currentUseru ? renderAfterLogin() : <div>NU S O RANDAT</div>}
        </>
    );
}

export default AfterLogin;
