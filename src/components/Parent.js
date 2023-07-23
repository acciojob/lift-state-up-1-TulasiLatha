import React,{useState} from "react";


const Parent=()=>{
    let [showmodal,setShowModal]=useState(false);

    return(
        <div>
           <Child showmodal={showmodal} setShowModal={setShowModal}/>
        </div>
    )
}
export default Parent;