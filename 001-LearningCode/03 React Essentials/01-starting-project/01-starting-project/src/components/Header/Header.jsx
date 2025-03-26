import reactImg from '../../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import './Header.css'; //Header.css will be not only applied to this component but to all <header>

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}