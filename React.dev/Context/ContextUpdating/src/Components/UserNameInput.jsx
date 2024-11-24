import { useContext } from "react";
import UserContext from '../Store/userContext'

function UserNameInput({change}){
    
    const { userName,setUserName } = useContext(UserContext);
    
    function HandleOnChange(event){
        setUserName(event.target.value)
    }

    return (
        <input type="text"
               value={userName}
               onChange={change}>
        </input>
    )
}

export default UserNameInput;