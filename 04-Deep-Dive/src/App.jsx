import CoreConcepts  from './components/CoreConcepts.jsx'
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';
import { Input } from './components/Input.jsx';
import Button from './components/Button.jsx';
import HomeIcon from './components/HomeIcon.jsx';
import PlusIcon from './components/PlusIcon.jsx';

function App() {
  return (
    <>
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
    {/* <Input type="text" placeholder="Your name" />
    <Input richText placeholder="Your message" /> */}
    {/* <Button mode="filled">Filled (Default)</Button> */}
    </>
  );
}

export default App;
