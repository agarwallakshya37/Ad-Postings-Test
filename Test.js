import React, { useState } from "react";
import {Link} from "react-router-dom";


function Test() {
  
  const [address,setAddress] = useState("");
  const[title, setTitle]= useState("");
  const[extraInfo, setInfo] =useState("");
  
  const handleAddressChange=(event)=>{
    setAddress(event.target.value);
  };

  const handleTitleChange=(event)=>{
    setTitle(event.target.value);
  };
  
  const handleInfoChange=(event)=>{
    setInfo(event.target.value);
  };

  const handleSubmit=(event)=>{
    console.log(event.target.value); 
    event.preventDefault();
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Give Address </label>
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label> Give Message </label>
        </div>
        <div>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label> Why are you here? </label>
        </div>
        <div>
          <textarea value={extraInfo} onChange={handleInfoChange} />
        </div>
        <div className="button">
          <Link to="/post">
            <button type="submit"> TEST  </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Test;
