import React from "react";

const Filter = (props) =>{
    return(
        <form>
            find countries <input onChange={props.onChange} value = {props.value}></input>
        </form>
    
    )
}

export default Filter