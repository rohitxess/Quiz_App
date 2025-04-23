import { Socket } from "socket.io";
import { QuizManager } from "./QuizManager";

export class UserManager {
    private users: {
        roomId: string;
        socket: string; 
    } []    // defines an array of objects

    constructor(){
        this.users = [];
    }

    // method 
    addUser(roomId: string, socket: Socket) {
        this.users.push ({
            socket, roomId
        })
        this.createHandlers (roomId, socket);
    }

    private createHandlers (roomId:string, socket: Socket){
        socket.on("submission", (data) => {
           QuizManager.submit(data)
                
            }
        })
    }
}