import Header from "./component/Header"
import Results from "./component/Results";
import UserInput from "./component/UserInput"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function changeHandler(idControl, newValue) {
    console.log(idControl, newValue);
    setUserInput((i) => {
      return { ...i, [idControl]: newValue };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeHandler} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
