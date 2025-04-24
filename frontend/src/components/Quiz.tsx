// create questions for the quiz 

import { useState } from "react";

/**
 * Simple view with title and answers 
 * title: string 
 * choices: string[]
 * image?: string 
 */

export function Quiz (QuizData, socket, userId, problemId): {
    QuizData: {
        title: string;
        options: string[];
    },
    socket:any;
    roomId: string;
    userId: string;
    problemId: string;
}) {}