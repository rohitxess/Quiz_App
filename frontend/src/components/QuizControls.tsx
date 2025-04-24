
export const QuizControls = ({socket, roomId} : {socket:any, roomId: string}) => {
    return <div>
        Quiz Controls 
        <button onClick={() => {
            socket.emit("next", {
                roomId
            })
        }}>Next problem</button>
    </div>
}