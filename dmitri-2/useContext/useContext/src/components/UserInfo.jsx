import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

export default function UserInfo(){
    const userName = useContext(UserContext);
    return (
        <span>{userName}</span>
    );
}