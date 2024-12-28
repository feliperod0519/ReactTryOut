import { UserContext } from "./store/UserContext";
import Layout from "./components/Layout";

function App() {
  const userName = "Minou el gato"
  return (
       <UserContext.Provider value={userName}>
          <Layout>Main content</Layout>
       </UserContext.Provider>
  );
}

export default App;
