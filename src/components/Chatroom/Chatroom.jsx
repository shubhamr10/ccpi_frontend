import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllNameSpace} from "../../store/actions/chatroom.action";
import {getAllRoom} from "../../store/actions/chatroom.action";
import {getAllMessage} from "../../store/actions/chatroom.action";
import {addMesaage} from "../../store/actions/chatroom.action";

const Chatroom = ({ getAllNameSpace, getAllRoom, getAllMessage, addMesaage, namespaces, rooms, messages }) => {
    const [state, setState] = useState({
        nameSpace:"",
        room:""
    })
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
    }
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
                            <div className="col-sm-12">
                                <div className="user-name-message">Teacher</div>
                                <div className="message-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="user-name-message"  style={{textAlign:"right"}}>Shubham</div>
                                <div className="message-box" style={{marginLeft:"auto"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum..
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="user-name-message"  style={{textAlign:"right"}}>Shubham</div>
                                <div className="message-box" style={{marginLeft:"auto"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum..
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="user-name-message"  style={{textAlign:"right"}}>Shubham</div>
                                <div className="message-box" style={{marginLeft:"auto"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum..
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="user-name-message"  style={{textAlign:"right"}}>Shubham</div>
                                <div className="message-box" style={{marginLeft:"auto"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum..
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="message-box" style={{marginLeft:"auto"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum..
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="message-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="message-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="message-box">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                </div>
                            </div>
                        </div>
                        <div className="inputContainer my-2">
                            <div className="row">
                                <div className="col-sm-10">
                                    <input type="text" style={{width:"100%", height:"100%"}}/>
                                </div>
                                <div className="col-sm-2" style={{textAlign:"right"}}>
                                    <button className="btn btn-primary btn-lg" type="submit">Send</button>
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
    namespaces:state.chatroom.namespaces,
    rooms:state.chatroom.rooms,
    messages:state.chatroom.messages,
})

export default connect(mapStateToProps, {
    getAllNameSpace, getAllRoom, getAllMessage, addMesaage
})(Chatroom);