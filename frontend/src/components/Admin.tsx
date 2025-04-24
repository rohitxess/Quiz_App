import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";
import { CreateProblem } from "./CreateProblem";
import { QuizControls } from "./QuizControls";
import { any } from "zod";

export const Admin = () => {
    const [socket, setSocket] = useState<null |any>(null);
    const [quizId, setQuizId] = useState("");
    const [roomId, setRoomId] = useState("");

    useEffect(() => {
        const socket = io("https://sum-server.100xdevs.com");
        setSocket(socket)

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("joinAdmin", {
                password:"ADMIN_PASSWORD"
            })
        });
    }, []);

    if (!quizId) {
        return <div>
            <input type="text" onChange={(e) => {
                setRoomId(e.target.value)
            }}/>
            <br />
            <button onClick={() => {
                socket.emit("createQuiz", {
                    roomId
                });
                setQuizId(roomId);
            }}>Create room</ button>
        </div>
    }
    return <div>
        <CreateProblem roomId={quizId} socket={socket}/>
        <CreateProblem socket={socket} roomId={roomId}/>
    </div>
}

// need to install the package for socket.io-client