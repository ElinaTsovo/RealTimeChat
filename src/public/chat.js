const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const userName = urlSearch.get("userName");
const room = urlSearch.get("select-room")


socket.emit("select-room", {
    userName,
    room
})

document.getElementById("message-input").addEventListener("keypress", (event)=>{
    if(event.key==='Enter'){
        const message= event.target.value
        console.log(message)

        const data = {
            room,
            message,
            userName
        }
        socket.emit("message", data)
        event.target.value = ""
    }
})

socket.on("message",(data) =>{
    const messageDiv = document.getElementById('message')
})
console.log("#codeWithMe#socket.io#tsovita")