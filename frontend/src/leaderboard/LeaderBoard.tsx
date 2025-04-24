
import Card from "./Card";

export function LeaderBoard({leaderboardData}: {
    leaderboardData: {
        points: number;
        username: string;
        profilePicture: string;

    }
}) 
{

    return (
        <div className="bg-opacity-20 bg-white backdrop-blur-5 border border-opacity-30 border-solid border-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl text-center my-4 text-white">Leaderboard Results</h1>
            <div className=" ">
                {leaderboardData.map((e1, index)=> (
                    <div className="flex justify-center">
                        <Card
                            sno = {index + 1 }
                            name = {e1.username}
                            points = {e1.points}
                            image = {e1.profilePicture}
                        />    
                    </div>
                ))}
            </div>
        </div>
    );
}