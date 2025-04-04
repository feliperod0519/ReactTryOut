import { useState } from "react";

export default function Player({initialName,symbol, isActive}){

    const [ isEditing, setIsEditing ] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);
    
    function handleEditClick(){
        //setIsEditing(!isEditing); error
        setIsEditing((editing)=>!editing) //this is a good practice because of scheduling
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;


    if (isEditing){
        editablePlayerName =(<input type="text" required value={playerName} onChange={handleChange} />);
    }
    
    return (
     <li className={isActive ? 'active' : undefined}>
       <span className="player">
         {editablePlayerName}
         <span className="player-symbol">{symbol}</span>
       </span>
       <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
     </li>
   );
}