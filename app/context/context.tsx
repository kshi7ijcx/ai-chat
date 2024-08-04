"use client"
import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext({});

const ContextProvider = (props:any) => {
     
    const [input,setInput] =

    const onSent = async(prompt:string) => {
        await run(prompt)
    }

    onSent("What is react?")

    const contextValue = {

    }   

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider