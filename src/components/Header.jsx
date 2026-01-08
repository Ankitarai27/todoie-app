// this is not a regular file it is jsx file (it will give components)
import React from "react";

const Header=(props)=>{
    return(
      <h1 className="todo-header">{props.title}</h1>  
    ) ;
};
export default Header;