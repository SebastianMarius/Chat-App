import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function ChatDetails() {
    return (
        <>
            <div className='chatMembAndFiles'>
                <p class='activeChatMem'>Chat Members</p>
                <p class='nonactiveChatMem'>Shared Files</p>
            </div>

            <div className='membersOfChat'>
                <h4>Members</h4>
                <div className='allMembers'>
                    <div className='member'>
                        <div
                            className='memberPhoto'
                            style={{
                                backgroundImage: `url(https://i.imgur.com/lr9ytDz.jpg)`,
                            }}></div>
                        <div className='userDetails'>
                            <h2>User name </h2>
                            <h3>User</h3>
                        </div>
                        <div className='chatIccon'>
                            <ChatBubbleIcon
                                style={{
                                    fontSize: 20,
                                    color: '#6545DE',
                                    padding: 10,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='allMembers'>
                    <div className='member'>
                        <div
                            className='memberPhoto'
                            style={{
                                backgroundImage: `url(https://i.imgur.com/lr9ytDz.jpg)`,
                            }}></div>
                        <div className='userDetails'>
                            <h2>User name</h2>
                            <h3>User</h3>
                        </div>
                        <div className='chatIccon'>
                            <ChatBubbleIcon
                                style={{
                                    fontSize: 20,
                                    color: '#6545DE',
                                    padding: 10,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='allMembers'>
                    <div className='member'>
                        <div
                            className='memberPhoto'
                            style={{
                                backgroundImage: `url(https://i.imgur.com/lr9ytDz.jpg)`,
                            }}></div>
                        <div className='userDetails'>
                            <h2>User name</h2>
                            <h3>User</h3>
                        </div>
                        <div className='chatIccon'>
                            <ChatBubbleIcon
                                style={{
                                    fontSize: 30,
                                    color: '#6545DE',
                                    padding: 10,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatDetails;
