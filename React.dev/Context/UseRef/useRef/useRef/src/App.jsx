import {useRef, useState} from 'react'

function App() {

  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleButton1 = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  }

  const handleButton2 = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  }

  console.log('rendered!');

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
        <button onClick={handleButton1}>Click me Ref</button>
        <br />
        <button onClick={handleButton2}>Click me Ref v.State</button>
      </main>
    </div>
  );
}

export default App;
