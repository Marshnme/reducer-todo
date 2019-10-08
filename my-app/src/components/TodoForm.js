import React,{useState} from 'react';


const TodoForm = ({dispatch}) => {
    const [newChore, setNewChore] = useState("");

    const handleChanges = e =>{
        setNewChore(e.target.value);
    };

    const submitChore = e =>{
        e.preventDefault();
        dispatch({ type: 'ADD_CHORE', payload: newChore })
        }

    // const clearChore = e =>{
    //     e.preventDefault();
    //     dispatch({type: "CLEAR_CHORE", })
    // }
    

    const handleSubmit = e =>{
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="newTodo"
                value={newChore}
                onChange={handleChanges}
            />
            <button type="submit" onClick={submitChore}>Add Chore</button>
            <button type="submit" onClick={clearChore} ></button>
        </form>
    
)
    };


export default TodoForm;