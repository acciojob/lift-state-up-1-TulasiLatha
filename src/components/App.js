
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";
import Child from "./Child";

const App = () => {
  return (
    <div>
      <Parent>
        <Child/>
        </Parent>
      
        {/* Do not remove the main div */}

    </div>
  )
}

export default App;
