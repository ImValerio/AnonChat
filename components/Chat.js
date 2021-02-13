import { useState, useEffect } from "react"
import io from 'socket.io-client'
import Message from "../components/Message"

function useSocket(url) {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socketIo = io(url)

        setSocket(socketIo)

        function cleanup() {
            socketIo.disconnect()
        }
        return cleanup


    }, [])

    return socket
}


const Chat = ({ room }) => {
    
    const socket = useSocket('http://localhost:5000');


    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{    
        return ()=>{
            if(socket !== null){
                console.log("Closing socket...");
                socket.close();
            }

        }
      },[])
    useEffect(() => {
        function handleEvent(payload) {
            console.log(payload);
            setMessages(payload);
            scrollDownChat();
        }
        if (socket && (room !== undefined)) {
            console.log(room)
            socket.emit('room-join', room);
            socket.on('chat-update', handleEvent);
        }
    }, [room,socket])

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, { username: socket.id, msg: message, date: new Date().toLocaleString() }])
        socket.emit('message', { message, room });
        setMessage("");
        scrollDownChat();

    }

    const scrollDownChat = () => {
        console.log("scroll-down");
        if (document.getElementById('chatMessages').lastChild) document.getElementById('chatMessages').lastChild.scrollIntoView(false)
    }


    return (
        <div className="w-full h-full flex flex-col justify-center items-center  text-center">
            <h1 className="text-white text-5xl font-bold mb-5">Room: <span className=" text-yellow-400 rounded-lg p-1 roomName">{room}</span> </h1>
            <div className="flex flex-grow flex-col justify-start items-center overflow-y-auto lg:h-3/6 m-5 w-full lg:w-3/6 " id="chatMessages">
                {messages.map((msg, i) => {
                    return <Message user={msg.username} text={msg.msg} date={msg.date} key={i}></Message>
                })}
            </div>

            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-grow-0 justify-center items-center w-full mb-5">
                <input className="w-3/6 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white shadow-lg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Text message..." required />
                <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r shadow-lg">SEND</button>
            </form>
        </div >
    )
}

export default Chat
