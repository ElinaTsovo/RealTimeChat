import { io } from "./http";

interface IRoom {
    socketId: string,
    userName:string,
    room:  string
}

interface IMessage {
    room: string,
    text:  string,
    createdAt: Date,
    userName: string
}

const users: IRoom[] = []
const messages: IMessage[] = []

// TODO: connection with Socket.io
io.on('connection', (socket) => {
    console.log('new user connected');

    // TODO: Event for message reception
    socket.on('select-room', (data:any) => {
        console.log('select-room', data);
        socket.join(data.room)

        const userInRoom = users.find(user => user.userName === data.userName && user.room === data.room)
        if(userInRoom){
            userInRoom.socketId = socket.id
        } else{
            users.push({
                room:data.room,
                userName:data.userName,
                socketId:socket.id
            })
        }

        socket.on("message", data=>{
            const message:IMessage = {
                room: data.room,
                userName:data.userName,
                text:data.message,
                createdAt: new Date()
            }

            messages.push(message)

        // TODO: Emitting the message to all connected clients
        io.to(data.room).emit("message",message);
        })

    });

 
});

//#codeWithMe#socket.io#tsovita


