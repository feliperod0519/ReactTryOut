import imagen from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={imagen} alt="FR :) Minou" />
            <h1>React Investment Calculator</h1>
            <p>feliperod0519@hotmail.com</p>
        </header>
    )
}