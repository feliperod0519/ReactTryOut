import { useContext } from "react";
import UserContext from "../Store/userContext";

const UserInfo =function UserInfo(){
    const { userName,setUserName } = useContext(UserContext);

    return (<span>
                <span>{userName}</span>
            </span>)
}

export default UserInfo;