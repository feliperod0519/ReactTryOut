import { useRef, useEffect } from "react";

function App() {

  console.log('rendered!');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default App;
