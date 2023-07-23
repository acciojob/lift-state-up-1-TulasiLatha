import React,{useState} from "react";

const Child=({showmodal,setShowModal})=>{
    
function handleChange(){
    setShowModal(true);
}

    return(
        <div>
           <button onClick={handleChange}>Show Modal</button>
        </div>
    )
}
export default Child;