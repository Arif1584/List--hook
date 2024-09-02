import React, { useEffect } from 'react';

function Counter({ number }){

// Mounting phase
    useEffect(() => {
        console.log("Function Component : Mounting...");
    },[]);

    //UpDating phase
    useEffect(() => {
        console.log("Function Component : UpDating...")
        
        
        return () => {
            console.log("Function Component : Removed")
        }

    },[number]
    )
    
//UnMounting phase
    



    return(
        <div>
             <h1>{number}</h1>
        </div>
    )
}
export default Counter;