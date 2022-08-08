import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

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

/**
* Step Three: useAxios in PlayingCardList
* 
*  In the PlayingCardList component, we initialize an empty array in state, and add to it via an AJAX request we make with axios. 
*  Since we use axios in a few components, let’s move this logic into a function called useAxios.
*  
*  useAxios should take in a URL, and similar to useState, it should return an array with two elements. 
*  The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
*  The second element is a function that will add a new object of data to our array.
*
*  Once you’ve written this hook, refactor PlayingCardList to use this custom hook.
*/
const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const res = await axios.get(url);
            setResponse(cards => [...cards, { ...res.data, id: uuid() }]);
        } catch (error) {
            setError(error);
        }
    }
    
    return [response, getData];
}

export { useFlip, useAxios };