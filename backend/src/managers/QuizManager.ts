import { IoManager } from "./IoManager";


export class QuizManager {
    private quizes: Quiz[];
    constructor(){
        this.quizes = [];
    }

    public start(roomId: string){
        const io = IoManager.getIo();
        const quiz = this.quizes.find(x => x.roomId === roomId);
        quiz.start();
    }

    public next (roomId: string){
        const io = IoManager.getIo();
        
    }
}