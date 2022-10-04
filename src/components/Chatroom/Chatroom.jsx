import React from 'react';


const Chatroom = () => {
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li className="list-group-item active">Global</li>
                            <li className="list-group-item">MCA#SEM-1</li>
                            <li className="list-group-item">MCA#SEM-2</li>
                            <li className="list-group-item">MCA#SEM-3</li>
                            <li className="list-group-item">MCA#SEM-4</li>
                            <li className="list-group-item">Personal</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2 my-2">
                    <div className="roomsMainContainer">
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item active">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
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

export default Chatroom;