import { IoManager } from "./IoManager";

export type AllowedSubmissions = 0 | 1 | 2 | 3 ;

interface User {
    name: string, 
    id: string;
}

interface Submission {
    problemId: string; 
    userId: string;
    isCorrect: boolean;
    optionSelected: AllowedSubmissions
}

interface Problem {
    id: string;
    title: string;
    description: string;
    image: string;
    answer: AllowedSubmissions // 0 ,1 ,2, 3 
    option: {
        id: number;
        title: number;
    }
}
export class Quiz {
    private roomId: string;
    private hasStarted: boolean;
    private problems = [];
    private activeProblem: number;

    constructor(roomId: string) {
        this.roomId = roomId;
        this.hasStarted = false;
        this.problems = [];
        this.activeProblem = 0;
    }

    addProblem(problem: Problem){
        this.problems.push(problem);

    }

    start (){
        this.hasStarted = true;
        const io = IoManager.getIo();
        io.emit ('CHANGE_PROBLEM', {
            problem: this.problems[0]
        })
    }

    next () {
        this.activeProblem++;
        const problem = this.problems[this.activeProblem];
        if (problem){
            io.emit('CHANGE_PROBLEM', {
                problem
            })
        } else {
            io.emit('QUIZ_END', {

            })
        }
    }

    addUser(name: string){
        const id = this.getRandomString(7);
        this.users.push({
            id, 
            name
        })

        return id;
    }

    submit (userId: string, roomId: string, problemId: string, submission: AllowedSubmissions){
        const problem = this.problems.find(x => x.id == problemId);
        if (problem){
            const existingSubmission = problem.submissions.find(x => x.userId == userId);
            if (existingSubmission){
                return;
            }
            problem.submissions.push({
                problemId,
                userId,
                isCorrect: problem.answer === submission, 
                optionSelected: submission
            });

        }
    }

    getlLeaderBoard(){

    }
}