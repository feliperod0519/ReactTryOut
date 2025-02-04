import { fakeNames } from "./data/fakeNames";
import { FilterList } from "./components/FilterList";

function App() {
  console.log(fakeNames);
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
        <FilterList people={fakeNames} />
      </main>
    </div>
  );
}

export default App;
