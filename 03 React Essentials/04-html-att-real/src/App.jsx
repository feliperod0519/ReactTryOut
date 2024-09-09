import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLESLAB, EXAMPLES} from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import Card from './components/Card';
//import Alert from './components/Alert';

function App() {

  //useState is a hook that allows you to have state variables in functional components
  //can only be used in functional components not in the inner ones
  //const stateArray =  useState('Please click a button'); //initial value of the state variable
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = 'Please select a tab';

  console.log('I only excute once');

  let tabContent1 = <p>Please select topic.</p>

  if (selectedTopic){
    tabContent1 = (<div id="tab-content">  
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                      <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                          <code>
                            {EXAMPLES[selectedTopic].code}
                          </code>
                        </pre>
                   </div>)
  }

  function handleTabClick(selectedButton){
      console.log('selectedButton', selectedButton);
      setSelectedTopic(selectedButton);
      //console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* {[<p>Hello</p>, <p>World</p>]} */}
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem} />)} //key is used to uniquely identify the elements, sometimes unnecessary
            
            {/* <CoreConcept title={CORE_CONCEPTS[0].title}
                       description={CORE_CONCEPTS[0].description}
                       image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept title={CORE_CONCEPTS[2].title}
                       description={CORE_CONCEPTS[2].description}
                       image={CORE_CONCEPTS[2].image}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
       <section id="cards">
          <Card {...EXAMPLESLAB[0]}>
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
            {/* <TabButton onSelected={handleTabClick}>Components</TabButton> */}
            <TabButton isSelected={selectedTopic==='components'} onSelected={()=> handleTabClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelected={()=> handleTabClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelected={()=> handleTabClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelected={()=> handleTabClick('state')}>State</TabButton>
          </menu>
          {/* {selectedTopic} */}
          {/* {selectedTopic && <p>Please select topic.</p>}
          {selectedTopic && (<div id="tab-content">  
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}
          {tabContent1}
        </section>
        <section id="alerta">
            {/* <Alert /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
