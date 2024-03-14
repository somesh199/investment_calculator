import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newInput) {
    setUserInput(prevUserData => {
      return {
        ...prevUserData,
        [inputIdentifier] : newInput
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onInput={handleChange} investmentData = {userInput} />
      <Result input={userInput}/>
    </>
  );
}

export default App
