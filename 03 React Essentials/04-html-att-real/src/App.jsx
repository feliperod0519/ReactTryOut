import { CORE_CONCEPTS, EXAMPLES} from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
                       description={CORE_CONCEPTS[0].description}
                       image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept title={CORE_CONCEPTS[2].title}
                       description={CORE_CONCEPTS[2].description}
                       image={CORE_CONCEPTS[2].image}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
       <section id="cards">
          <Card {...EXAMPLES[0]}>
            <p>
              Maria is a professor of Computer Science at the University of Illinois.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Maria</a>
            </p>
          </Card>
      </section> 
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
