import { useState, useEffect } from 'react'
import { generate } from "shortid"

 //a custom hook to remove the color adding function from being hard coded in the app component
 export const useColors = () => {
    const [colors, setColors] = useState([]);

    const addColor = color => {
      const newColor = { id: generate(), color }
      setColors([newColor, ...colors])
    };
    return { colors, addColor }
  }