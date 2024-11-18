import './Button.css';
import Button from './Button';
import ToggleButton from './ToggleButton';
import { memo } from 'react';

const HeaderDarkLight = memo(function HeaderDarkLight() {
    return (
        <header className='header'>
           <Button>Products</Button>
           <Button>Services</Button>
           <Button>Pricing</Button>
           <ToggleButton />
        </header>
    );
});

export default HeaderDarkLight;