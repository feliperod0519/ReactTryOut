import { reducerForm } from "../functions/ReducerForm";
import { initialState } from "../data/initialState";
import { useReducer } from "react";

const Form = ()=>{

    const [ currentUser,dispatchUser ] = useReducer(reducerForm,initialState);

    const handleButtonClick = () => {
        dispatchUser( { type:'incremented_age' } )
    }

    const handleInputChange = (e) => {
        dispatchUser( { type:'changed_name', name: e.target.value } )
    }

    return (
        <>
            <input value={currentUser.name} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>
                Increment age
            </button>
            <p>Hello, {currentUser.name}. You are {currentUser.age}.</p>
        </>
    )
}

export default Form;

