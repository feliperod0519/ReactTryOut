import { useContext } from "react";
import { CurrentUserContext } from "../store/CurrentUserContext";
import Button from "./Button";

const LoginButton = function LoginButton(){
    const { currentUser, setUserContext } = useContext(CurrentUserContext);

    function onClick(){
        setUserContext({name:'Minou the Cat!'});
        console.log('click Logged');
    }

    if (currentUser!=null){
        return <p>Logged in as {currentUser.name}</p>
    }
    return (
        <Button onClick={onClick}>Log in as Minou!</Button>
    )
}

export default LoginButton;