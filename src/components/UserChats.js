import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ADDfriend from './ADDfriend';
import { useState, useEffect } from 'react';
import database from 'firebase/app';
import ChatDetails from './chatDetails';
import firebase from 'firebase/app';
import 'firebase/storage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Login from './Login';
import UserMessages from './UserMessages';

const MakeFriendChat = () => {};

const loadUserConversation = (doc, functionArguments) => {
    console.log(doc.data().chats);
    const db = database.firestore();

    doc.data().chats.forEach((chat) => {
        db.collection('Chats')
            .doc(chat)
            .get()
            .then((doc) => {
                functionArguments.setChatDetailsRender((prev) =>
                    prev.concat(doc.data())
                );
            });
    });


    console.log('=============');
    functionArguments.setChatDetailsRender([]);
};

const RenderChats = (functionArguments) => {
    useEffect(() => {
        const db = database.firestore();
        db.collection('users')
            .doc(functionArguments.userUID)
            .collection('chats')
            .doc('chats')

            .onSnapshot((doc) => {
                functionArguments.setArrayOfMsgUID(
                    doc.data().chats,
                    loadUserConversation(doc, functionArguments)
                );
            });
    }, []);
};

function UserChats(props) {
    const userUID = props.user.uid;
    const [isAddFriend, setAddFriend] = useState(false);
    const [userPhoto, setUserPhoto] = useState();
    const [chatUID, setChatUID] = useState();
    const [actualConvLoading, setActualConvLoading] = useState();
    const [ArrayOfMsgUID, setArrayOfMsgUID] = useState([]);
    const [ChatDetailsRender, setChatDetailsRender] = useState([]);

    let history = useHistory();
    const storage = firebase.storage();
    var storageRef = storage.ref('image/pozikaaadeps.png');
    // var imageRef = storageRef.child('image_2021-07-23_001823.png');

    useEffect(() => {
        storageRef.getDownloadURL().then((url) => {
            setUserPhoto(url);
        });
    }, []);

    const afterClikChat = (chatObject) => {
       

        history.push('/Chats/' + chatObject.uid);

        alert(chatObject.uid);
        console.log(chatObject);
        setActualConvLoading(chatObject.uid);
        props.setChatUID(chatObject.uid);


    };

    const functionArguments = {
        userUID: userUID,
        setArrayOfMsgUID: setArrayOfMsgUID,
        ArrayOfMsgUID: ArrayOfMsgUID,
        ChatDetailsRender: ChatDetailsRender,
        setChatDetailsRender: setChatDetailsRender,
    };

    RenderChats(functionArguments);

    // var storage = firebase.storage('gs://chat-app-c58b1.appspot.com/');
    // var storageRef = storage.ref();
    // var child = storageRef.child('hamham.jpeg');
    // setChatDetailsRender([]);
    // setChatDetailsRender([0]);

    return (
        <>
            {isAddFriend ? (
                <ADDfriend
                    setAddFriend={setAddFriend}
                    user={props.user}
                    setChatUID={setChatUID}
                />
            ) : (
                <div className='manageChats'>
                    <p>Chats</p>

                    <div className='manageChatBtns'>
                        <button className='search'>
                            <SearchIcon />
                        </button>
                        <button
                            className='plus'
                            onClick={() => {
                                setAddFriend(true);
                                MakeFriendChat();
                            }}>
                            <AddIcon />
                        </button>
                    </div>
                </div>
            )}
            <div className='selectBtns'>
                <button className='selectBtnsFOCUS'>All</button>
                <button>Unread</button>
                <button>Groups</button>
            </div>
            <div className='userChatBubbles'>
                {ChatDetailsRender.map((chatObject) => {
                    let chatUrl = '/Chats/' + chatObject.uid;
                    return (
                        <div
                            className='allOfMessage'
                            onClick={() => {
                                afterClikChat(chatObject);
                            }}>
                            <div className='messageBubleNEWMSG'>
                                <img src={userPhoto} className='photo'></img>

                                <div className='personNameAndMsg'>
                                    <h3>{chatObject.uid}</h3>

                                    <p> The last message will be here</p>
                                </div>

                                <div className='messageTime'>69m</div>
                            </div>
                        </div>
                    );
                })}

             
            </div>
        </>
    );
}
export default UserChats;
