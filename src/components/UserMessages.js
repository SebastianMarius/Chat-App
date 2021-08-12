import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import database from 'firebase/app';

function sendMsgToDb(userMessagetoSend, chatUID, user) {
    var dbChats = database.firestore().collection('Chats');

    var date = Date.now();

    dbChats.doc(chatUID).collection('chat-msg').doc(date.toString()).set({
        text: userMessagetoSend.text,
        authorUID: user.uid,
    });

    // userMessagetoSend.text = userMessagetoSend./;
    console.log(userMessagetoSend.text);
    console.log(user.uid);
    // console.log(props)
}

function UserMessages(props) {
    const [MsgToSend, setMsgToSend] = useState();

    var userMessagetoSend = {
        authorUID: null,
        text: MsgToSend,
        dateOfMsg: null,
    };
    const chatUID = props.chatUID;

    return (
        <>
            <h1>{chatUID}</h1>

            <div className='allOfTheMessagess'>
                <div className='emptyChatMessage'>
                    <p>Welcome to this chat-app, hope you will enjoy it!</p>
                    <p className='afterWelcomeUser'>
                        This app it's made in order to learn some database
                        skills, it might not be perfect but it's still a work in
                        progress, hope you will enjoy it
                    </p>
                </div>

                <div className='message '>
                    <div
                        className='photoReceive'
                        style={{
                            backgroundImage: `url(https://i.imgur.com/lr9ytDz.jpg)`,
                        }}></div>

                    <div className='receiveBubbleMsg'>How ya doing?</div>
                </div>

                <div className='message myMsg'>
                    <div
                        className='photoReceive'
                        style={{
                            backgroundImage: `url(https://i.imgur.com/EnT9rKu.jpg)`,
                        }}></div>

                    <div className='receiveBubbleMsg myBuble'>
                        {' '}
                        Some very long message in order to test smth. Some very
                        long message in order to test smth. Some very long
                        message in order to test smth. Some very long message in
                        order to test smth. Some very long message in order to
                        test smth. Some very long message in order to test smth.
                        Some very long message in order to test smth
                    </div>
                </div>

                <div className='message '>
                    <div
                        className='photoReceive'
                        style={{
                            backgroundImage: `url(https://i.imgur.com/lr9ytDz.jpg)`,
                        }}></div>

                    <div className='receiveBubbleMsg'>
                        Some very long message in order to test smth. Some very
                        long message in order to test smth. Some very long
                        message in order to test smth. Some very long message in
                        order to test smth. Some very long message in order to
                        test smth. Some very long message in order to test smth.
                        Some very long message in order to test smth. Some very
                        long message in order to test smth. Some very long
                        message in order to test smth
                    </div>
                </div>
            </div>
            <div className='userInputMsg'>
                <button>
                    <AttachFileIcon className='addDoc' />
                </button>
                <input
                    type='text'
                    onChange={(e) => {
                        setMsgToSend(e.target.value);
                    }}
                    placeholder='Write a message...'
                    // onFocus="this.placeholder=''"
                />
                <button
                    onClick={() => {
                        sendMsgToDb(userMessagetoSend, chatUID, props.user);
                        console.log(chatUID);
                    }}>
                    <SendIcon className='send' />
                </button>
            </div>
        </>
    );
}

export default UserMessages;
