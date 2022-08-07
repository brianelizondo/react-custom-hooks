import React, { useState } from "react";

/**
* Step Two: useFlip
* 
*  Create a hooks.js file in src/, and in that file write a custom hook called useFlip 
*  which will hold the business logic for flipping any type of card
*  
*  useFlip doesn’t need to take an argument, and similar to useState, it should return an array with two elements. 
*  The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.
*/
const useFlip = () => {
    const [facingUp, setFacingUp] = useState(true);
    const flipCard = () => {
        setFacingUp(facingUp => !facingUp);
    }; 
    return [facingUp, flipCard]
}

export default useFlip;
