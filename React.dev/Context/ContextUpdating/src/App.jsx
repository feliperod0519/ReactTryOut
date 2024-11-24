import UserContext from "./Store/userContext";
import Layout from "./Components/Layout";
import UserNameInput from "./Components/UserNameInput";

import { useState, useMemo } from 'react';
import UserInfo from "./Components/UserInfo";

function App() {
  
  console.log('Re-load');
  const [ userName, setUserName ] = useState('Minou the Cat');
  
  const userNameValueContext = useMemo(
    () => ({userName,setUserName})
  ,[userName]) ;

  const HandleOnChange = (e)=>{setUserName(e.target.value)}

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
      <UserContext.Provider value={userNameValueContext}>
          {useMemo(()=>(
            <>
              <UserNameInput change={()=>HandleOnChange(event)} />
              <br />
              <UserInfo />
            </>
          ))}
      </UserContext.Provider>
    </div>
  );
}

export default App;
