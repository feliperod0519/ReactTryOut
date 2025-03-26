import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {

  console.log('app execution');
  const [ selectedTopic, setSelectedTopic ] = useState(null); //always called at top level
  const [ selectedObj, setSelectedObj ] = useState(EXAMPLES.components)

  const tabContent = (
    <div id="tab-content">
      <h3>{selectedObj.title}</h3>
      <p>{selectedObj.description}</p>
      <pre>
        <code>{selectedObj.code}</code>
      </pre>
    </div>
  );

  function OnClickHandler(selectedButton){
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    setSelectedObj(EXAMPLES[selectedButton]);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(x=><CoreConcept key={x.title} {...x} />)
            }
            {/* {[
              <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />,
              <CoreConcept {...CORE_CONCEPTS[1]} />,
              <CoreConcept {...CORE_CONCEPTS[2]} />,
              <CoreConcept {...CORE_CONCEPTS[3]} />
            ]} */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => OnClickHandler('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => OnClickHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => OnClickHandler('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => OnClickHandler('state')}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTopic && <p>Please select a topic</p> }
            {selectedTopic && tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
