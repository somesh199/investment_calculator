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

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newInput) {
    setUserInput(prevUserData => {
      return {
        ...prevUserData,
        [inputIdentifier] : +newInput
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onInput={handleChange} investmentData = {userInput} />
      {!inputValid && (<p className="center">Please enter the value more than zero.</p>)}
      {inputValid && <Result input={userInput}/>}
    </>
  );
}

export default App
