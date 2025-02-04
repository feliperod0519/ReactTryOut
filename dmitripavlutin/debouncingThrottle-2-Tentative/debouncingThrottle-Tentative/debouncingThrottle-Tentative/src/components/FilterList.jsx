import { useState, useCallback } from "react";
import debounce from "lodash";

export function FilterList({people}){
    
    let filteredNames = people;
    //console.log(filteredNames);
    const [term,setTerm] = useState(null);
    
    if (term !== null){
        filteredNames = people.filter((person)=>{
            return person.toLowerCase().includes(term.toLowerCase())
        })
    }

    const changeHandler = (e)=>{
        setTerm(e.target.value);
    }

    const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

    return (
        <div>
            <input onChange={()=>debouncedChangeHandler()} type="text" placeholder="Type query..."/>
                {filteredNames.map((name) => (
                    <div key={name}>{name}</div>
                ))}
            <div>{filteredNames.length === 0 && term !== null && "No matches..."}</div>
        </div>
    )
}