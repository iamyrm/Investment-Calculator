import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  // Lifting up the states form the UserInput Component
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInputAsProp={userInput} onChangeInput={handleChange} />
      {!isInputValid && (
        <p className="center">
          Please input valid data. Duration should be greater than zero.
        </p>
      )}
      {/* 
      {isInputValid ? <Results input={userInput} /> : undefined}

      This code can aslo be written as:
       */}
      {isInputValid && <Results input={userInput} />}
    </>
  );
};

export default App;
