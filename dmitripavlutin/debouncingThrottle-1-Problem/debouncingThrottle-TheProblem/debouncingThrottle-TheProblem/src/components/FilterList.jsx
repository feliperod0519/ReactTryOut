import { useState } from "react";

export function FilterList({people}){
    
    let filteredNames = people;
    //console.log(filteredNames);
    const [term,setTerm] = useState(null);
    
    if (term !== null){
        filteredNames = people.filter((person)=>{
            return person.toLowerCase().includes(term.toLowerCase())
        })
    }

    return (
        <div>
            <input onChange={(e)=>{ setTerm(e.target.value) }} type="text" placeholder="Type query..."/>
                {filteredNames.map((name) => (
                    <div key={name}>{name}</div>
                ))}
            <div>{filteredNames.length === 0 && term !== null && "No matches..."}</div>
        </div>
    )
}