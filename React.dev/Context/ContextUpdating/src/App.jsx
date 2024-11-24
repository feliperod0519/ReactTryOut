import UserContext from "./Store/userContext";
import Layout from "./Components/Layout";

import { useEffect, useState } from 'react';

function App() {
  
  console.log('Re-load');
  const [ userName, setUserName ] = useState('Minou the Cat');
  
  const userNameValue = userName ;

  useEffect(()=>{
    setTimeout(()=>{
      setUserName('felipeRod')
    },5000)
  },[])

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
      </main>
      <UserContext.Provider value={userNameValue}>
        <Layout>Hello :)</Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
