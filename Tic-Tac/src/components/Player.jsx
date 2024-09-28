import { useState } from "react"

export default function Player({initialName, symbol}) {

    const [isEditing, setIsEditing ] = useState(false);
    const [newName, setNewName] = useState(initialName);

    function handleEditClick(){
        setIsEditing((editing)=> !editing); //instead of !isEditing, we use a function to get the previous value
                                           // this is because the state update is asynchronous and we need to make sure we are getting the latest value
    }

    function handleNameChange(event){
        console.log(event);
        setNewName(event.target.value);
    }

    let playerName = <span className="player-name">{newName}</span>;
    
    if(isEditing){
        playerName = <input type="text" required value={newName} onChange={handleNameChange} />;
    }

    return (
      <li>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
      
    )
}   