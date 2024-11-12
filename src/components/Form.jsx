import { useState } from "react";
import styles from "./form.module.css"

export default function Form({todos,setTodos}){

    // const [todo,setTodo]=useState("");
    const [todo,setTodo]=useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false});
       }

    return(
        <form className={styles.todoForm} action="" onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
          <input className={styles.mordenInput} type="text" placeholder="Enter the todos.." value={todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})} />
          <button className={styles.mordenButton}>Add</button>  
          </div>
      </form>  
    )
}