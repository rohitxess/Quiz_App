import { Socket } from "socket.io";
import { QuizManager } from "./QuizManager";
import { data } from "react-router-dom";

export class UserManager {
    private users: {
        roomId: string;
        socket: string; 
    } []    // defines an array of objects

    constructor(){
        this.users = [];
    }

    socket.on("join_admin", (data) => {
        const userId = this.QuizManager.addUser(data.roomId, data.name)
        if (data.password !== ADMIN_PASSWORD) {
            return;
        }

        socket.emit("adminInit" ,{
            userId, 
            state: this.QuizManager.getCurrentState(roomId)
        });

        socket.on("createProblem", data => {
            const roomId = data.roomId;
            this.quizManager.addProblem(data.roomId, data.problem);
        });

        socket.on("next", data => {
            const roomId = data.roomId;
            this.quizManager.next(data.oomId, data.problem);
        });
    });

    socket.on ("submit", (data) => {
        const userId = data.userId;
        const problemId = data.problemId;
        const submission = data.submission;
        const roomId = data.submission;
    })

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