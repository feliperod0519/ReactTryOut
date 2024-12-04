import { useState } from "react";
import { CurrentUserContext } from "./store/CurrentUserContext";
import Form from "./components/Form";

function App() {

  const [currentUser, setUserContext] = useState(null);
  const contextValue = { currentUser,setUserContext }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <CurrentUserContext.Provider value={contextValue}>
          <Form/>
        </CurrentUserContext.Provider>
      </main>
    </div>
  );
}

export default App;
