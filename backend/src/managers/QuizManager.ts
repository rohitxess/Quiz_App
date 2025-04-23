import { IoManager } from "./IoManager";
import { AllowedSubmissions } from "./Quiz";


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

    public addProblem(roomId: string, problem: {
        title: string;
        description: string;
        image: string;
        options: {
            id: number;
            title: string;
        }[]; // this is array of objects
        answer: AllowedSubmissions;
    }) {
        const quiz = this.getQuiz(roomId);
        if(!quiz){

        }

    }

}