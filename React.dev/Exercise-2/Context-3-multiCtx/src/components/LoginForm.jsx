import { CurrentUserContext } from '../store/CurrentUserContext';
import { useState, useContext } from 'react';
import Button from './Button';


export function LoginForm(){
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {setCurrentUser} = useContext(CurrentUserContext);
    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';

    return (
        <>
            <label>First name{': '}<input required value={firstName} onChange={e => setFirstName(e.target.value)}/></label>
            <label>Last name{': '}<input required value={lastName} onChange={e => setLastName(e.target.value)}/></label>
            <Button disabled={!canLogin} onClick={() => { 
                                                            setCurrentUser({ name: firstName + ' ' + lastName });
                                                        }}>
                Log in
            </Button>
            {!canLogin && <i>Fill in both fields.</i>}
        </>
    );
}