import { Card, CardContent } from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import app_config from '../config';
import './chat.css';
import ManageTeam from './manageTeam';

const Chat = () => {

    const url = app_config.api_url;
    const socket = io({autoConnect : false});
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([
        {user : 'example user', message : "example message", type: 'incoming'},
        {user : 'example user 2', message : "example message 2", type: 'outgoing'},
    ]);
    const [teamList, setTeamList] = useState([]);
    const [currentTeam, setCurrentTeam] = useState("");
    const currentUser = JSON.parse(sessionStorage.getItem('user'));

// Recieve messages 
socket.on('message', (data) => {
    let msgObj = {user : data['user'], message : data.message, type: 'incoming'} 
    setMessageList([...messageList, msgObj]);
    scrollToBottom()
})

function scrollToBottom() {
    let messageArea = document.getElementById('msg_area');
    messageArea.scrollTop = messageArea.scrollHeight
}

    useEffect(() => {

        socket.connect(url);

        console.log(messageList);
        socket.on('rec', (data) => {
            console.log(data);
            setMessageList([...messageList, data]);

        })

        socket.on('newteam', (data) => {
            console.log(data);
            setTeamList(data);
        })
    }, [])

    const sendMessage = () => {
        let msgObj = {user : currentUser.fullname, message : message, type: 'outgoing'} 
        console.log('gghhg')

        socket.emit('send', {text : message, team : currentTeam, user: currentUser.fullname});
        setMessageList([...messageList, msgObj]);
        setMessage("");
        scrollToBottom()

    }

    return (
        <div className="col-md-10 mx-auto">
            <h1 className="text-center">Chat Component</h1>
            <div className="row">
                <div className="col-2">
            <ManageTeam socket={socket} setCurrentTeam={setCurrentTeam} teamList={teamList} team={currentTeam}></ManageTeam>

                </div>
                <div className="col-10">
                <Card>
                <CardContent className="card-body">

                    <section className="chat__section">
                    <div class="brand">
                        <h1>mssg</h1>
                    </div>
                    <div className="message__area" id="msg_area">
                        
                        {
                            messageList.map((msg, index) => {
                                return <div key={index} className={clsx('message', msg.type)}>
                                    <h4>{msg.user}</h4>
                                    <p>{msg.message}</p>
                                </div>
                            })
                        }

                    </div>
                    <div className="input-group">
                        <input className="form-control" value={message} onChange={e => setMessage(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </section>
                </CardContent>
            </Card>

                </div>
            </div>
                    </div>
    )
}

export default Chat;