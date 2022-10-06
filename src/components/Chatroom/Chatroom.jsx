import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllNameSpace} from "../../store/actions/chatroom.action";
import {getAllRoom} from "../../store/actions/chatroom.action";
import {getAllMessage} from "../../store/actions/chatroom.action";
import {addMesaage} from "../../store/actions/chatroom.action";
// import { io } from "socket.io-client";

const Chatroom = ({ getAllNameSpace, getAllRoom, getAllMessage, addMesaage, namespaces, rooms, messages, user }) => {
    // var socket = io("ws://localhost:3001");
    const [state, setState] = useState({
        nameSpace:"",
        room:""
    });
    const [message, setMessage] = useState('');
    useEffect(() => {
        getAllNameSpace();
    }, [getAllNameSpace ]);
    const onClick = (name, value) => {
        setState({
            ...state,
            [name]:value
        });
        if(name === "nameSpace"){
            getAllRoom(value);
        }
        if(name === "room"){
            getAllMessage(value);
        }
    }

    const onChange = e => {
        setMessage(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        const formData = {
            message:message,
            room:state.room,
        };
        addMesaage(formData);
        setMessage('');
    }
    console.log(messages, user);
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            {
                                namespaces.map((namespace, index) => ( <li key={index} onClick={() => onClick("nameSpace",namespace._id) } className={`list-group-item ${state.nameSpace === namespace._id ? 'active': ''}`} >{namespace.name}</li> ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2 my-2">
                    <div className="roomsMainContainer">
                        <ul className="list-group">
                            {
                                rooms.map((room, index) => ( <li key={index} onClick={() => onClick("room",room._id) }   className={`list-group-item ${state.room === room._id ? 'active': ''}`}>{room.name}</li> ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="messageMainContainer rounded">
                        <div className="messageContainer border p-2">
                            {
                                state.nameSpace && state.room &&  messages.map((message, index) => (
                                    <div className="col-sm-12" key={index}>
                                        <div className={`user-name-message ${message.user._id === user.user.id ? 'myUser' : ''}`}>{message.user.name}</div>
                                        <div className={`message-box ${message.user._id === user.user.id ? 'myMessage' : ''}`}>{message.message}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="inputContainer my-2">
                            <div className="row">
                                <div className="col-sm-10">
                                    <input type="text" name={"message"} value={message} onChange={onChange} style={{width:"100%", height:"100%"}}/>
                                </div>
                                <div className="col-sm-2" style={{textAlign:"right"}}>
                                    <button className="btn btn-primary btn-lg" onClick={onSubmit}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user:state.auth.user,
    namespaces:state.chatroom.namespaces,
    rooms:state.chatroom.rooms,
    messages:state.chatroom.messages,
})

export default connect(mapStateToProps, {
    getAllNameSpace, getAllRoom, getAllMessage, addMesaage
})(Chatroom);