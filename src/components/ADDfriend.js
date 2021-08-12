import PersonAddIcon from '@material-ui/icons/PersonAdd';
import firebase from 'firebase';
import database from 'firebase/app';
import { useState } from 'react';
import { sha256, sha224 } from 'js-sha256';
import UserChats from './UserChats';

function ADDfriend(props) {
    const [SearchUID, setSearchUID] = useState();

    const actualUser = props.user;
    var dbChats = database.firestore().collection('Chats');
    var dbUsers = database.firestore().collection('users');

    const addAfriend = (actualUser) => {
        props.setAddFriend(false);
        var hashDMchat = sha256.create();
        hashDMchat.update(actualUser.uid + SearchUID);

        dbChats.doc(hashDMchat.toString()).set({ uid: hashDMchat.toString() });

        dbUsers
            .doc(actualUser.uid)
            .collection('chats')
            .doc('chats')
            .update(
                {
                    chats: database.firestore.FieldValue.arrayUnion(
                        hashDMchat.toString()
                    ),
                },
                {}
            )
            .catch(console.log('err'));

        dbUsers
            .doc(SearchUID)
            .collection('chats')
            .doc('chats')
            .update({
                chats: database.firestore.FieldValue.arrayUnion(
                    hashDMchat.toString()
                ),
            })
            .catch(console.log('err'));
    };
    return (
        <>
            <div className='addFriend'>
                <input
                    type='text'
                    placeholder='Enter your friend UID'
                    onChange={(e) => setSearchUID(e.target.value)}
                />
                <button onClick={() => addAfriend(actualUser)}>
                    <PersonAddIcon style={{ fontSize: '23' }} />
                </button>
            </div>
        </>
    );
}

export default ADDfriend;
