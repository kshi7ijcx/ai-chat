"use client";
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, next) => {};

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await run(input);
    let responseArrray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArrray.length; i++) {
      if (i===0 || i % 2 !== 1) {
        newResponse += responseArrray[i];
      } else {
        newResponse += "</br><b>" + responseArrray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;
