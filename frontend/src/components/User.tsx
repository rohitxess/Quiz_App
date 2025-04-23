import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export const User = () => {
    const searchParams = new URLSearchParams(document.location.search)
    const [socket, setSocket] = useState<null | any>(null);
    const roomId = searchParams.get("roomId");
    useEffect(() => {
        const socket = io("http://localhost:3000");
        setSocket(socket)

        socket.on("connect", () => {
            console.log(socket.id);
            socket.emit("joinAdmin", {
                password: "ADMIN_PASSWORD"
            })
        })
    })
    return <div>
        
    </div>
}