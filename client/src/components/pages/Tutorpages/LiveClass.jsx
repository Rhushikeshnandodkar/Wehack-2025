import React from 'react'
import { LiveclassStyle } from './tutor.style'
import { GlobalStyle } from '../commonpages/common.style'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const socket = io("http://localhost:5000", { autoConnect: false });

function LiveClass() {
    const { roomId } = useParams()
    // const [roomID, setRoomID] = useState("");
    const {user} = useSelector((state) => (state.user))
    const [userName, setUserName] = useState("");   
    const [message, setMessage] = useState("");
    const [prevMessages, setprevMessages] = useState([])
    const [newMessage, setnewMessage] = useState([])
    const [chatLog, setChatLog] = useState([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.connect() 
        if(user){
        }
        socket.emit('join_room', {roomId})

        socket.on("room_joined", (data) =>{
            console.log(data)
            setprevMessages(data)
        })

        socket.on("received_message", (data) =>{
            console.log("data is here ------", data)
            // console.log(data)
            setprevMessages((prev) => [...prev, data])
            // setprevMessages(data);
                    // setprevMessages((prev) => [...prev, { sender: user?.name, comment: message }]);

        })

        return () => {
            socket.off("received_message");
            socket.disconnect();
        };
    }, [user, roomId]);



    const sendMessage = () =>{
        // socket.emit("send_message", {roomid : roomId, sender : user?.name,  chat : message})
        const newMessage = { roomid: roomId, sender: user?.name, comment: message };

        // Emit the message to the server
        socket.emit("send_message", newMessage);
    
        // Instantly show the message without waiting for backend
        // setprevMessages((prev) => [...prev, { sender: user?.name, comment: message }]);
    
        // Clear input after sending
        setMessage("");
    }
  return (
    <>
    <GlobalStyle/>
<LiveclassStyle>

<div className="messages">
                            
        <div className="live-container">
        <div className="main-content">
            <div className="poll-container">
                <div className="question-content">
                    <h2>Q. What is maths?</h2>
                    <b>23.6 sec</b>
                </div>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
            <div className="video-controls">
            <button className="control-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1={12} y1={19} x2={12} y2={23} />
                <line x1={8} y1={23} x2={16} y2={23} />
                </svg>
                Mic
            </button>
            <button className="control-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
                </svg>
                Camera
            </button>
            <button className="control-btn">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
                Share Screen
            </button>
            <button className="control-btn danger">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1={12} y1={2} x2={12} y2={12} />
                </svg>
                End Class
            </button>
            </div>
        </div>
        <div className="sidebar">
            <div className="chat-box" >
            <div className="box-header">
                <h2>Live Chat</h2>
                <span>24 participants</span>
            </div>
            {prevMessages.length > 0 
                ? prevMessages.map((data, index) => (
                    <div 
                        key={index} 
                        className={data.sender === user.name ? "message sent" : "message-sent"}
                    >
                        <div className="message-bubble">
                        <strong>{data.sender || "Anonymous"}</strong>
                        <p>{data.comment}</p>
                        </div>
                    </div>
                    ))
                : <h2>No messages yet</h2>
            }

            </div>
            <div className="message-input">
                <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="send-btn" onClick={sendMessage}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <line x1={22} y1={2} x2={11} y2={13} />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                </button>
            </div>
            </div>
          
        </div>
        </div>
        </LiveclassStyle>
        </>
  )
}

export default LiveClass