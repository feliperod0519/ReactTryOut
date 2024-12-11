import { useContext } from 'react';
import { CurrentUserContext } from '../store/CurrentUserContext';

export function Greeting(){
    const {currentUser} = useContext(CurrentUserContext);
    return <>You logged in as {currentUser.name}</>
} 