import styles from "./todoitem.module.css";
export default function TodoItem({item,todos,setTodos}){
    // using the props destructuring to print the todos

    function handleDelete(item){
        console.log("Todo item is deleted.. for ",item);
        setTodos(todos.filter((todo)=>todo!==item));
    }

    //handling the click event
    function handleClick(name){
        // console.log("checked the ",name);
       const newArray = todos.map((todo)=>todo.name==name?{...todo,done:!todo.done}:todo);
       setTodos(newArray)
    //    console.log(todos)
    }

    const className = item.done?styles.completed:"";

    return <div className={styles.item}>
        <div className={styles.itemName}>
           <span onClick={()=>handleClick(item.name)} className={className}> {item.name} </span>
            <span>
            <button className={styles.deleteButton} onClick={()=>handleDelete(item)}>X</button>
        </span>
            </div>
        
        <hr className={styles.line} />
        </div>;
}