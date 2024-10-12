import Toast from './components/Toast';

function App() {
  function handleEnrol() {
    // Todo: Show toast

    setTimeout(() => {
      // Todo: hide toast
    }, 3000);
  }

  return (
    <div id="app">
      <Toast message="hello baby" />
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
