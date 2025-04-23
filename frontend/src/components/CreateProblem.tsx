import { useState } from "react";

export const CreateProblem = () => {
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState([{
        id: 0, 
        title: ""
    }, {
        id: 1, 
        title: ""
    }, {
        id: 2, 
        title: ""
    }, {
        id: 3, 
        title: ""
    }])

    return <div>
        Create problem 
        <input type="text" onChange={(e) => {
            setTitle(e.target.value)
        }} />

        {[1, 2, 3,4 ]}.map(optionId => <div>
            <input type="text" onChange={(e) => {
            setOptions(options => options.map(x => {
                if (x.id === optionId) {
                    return {
                        ...x,
                        title: e.target.value
                    }
                }
                return x;
            }))
            }}/>
            </div>)
        
    </div>
}

// need to install the dependencies 

