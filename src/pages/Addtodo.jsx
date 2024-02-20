import React, { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from '../supabase/Supabase'
import Button from "../components/Button";

const Addtodo = () => {
  const { register, handleSubmit } = useForm();
  const [Add,setAdd] = useState({})


  const myfunc =async (x) => {
    console.log(x);
    setAdd(x);

    
    const { data, error } = await supabase
    .from('TodaysPlan')
    .upsert({ 
      todo_name:x.task,
      todo_status:false
     })
    .select()
    
    console.log(data)
  };
  const [pendingTodos,changePendingTodos] =useState(['Learn python']);
  const [completedTodos,changeCompletedTodos] =useState(['Learn typescript']);
  const [todoText,changeTodotext] = useState('');
  const [errorVisible,changeErrorVisible] =useState(false);
  const [error,changeError] =useState('')

  // funcvtion to update todo text
  const handleInputChange =(event)=> {
    if(event.target.value.length>2){
      changeError('')
    }
  
  changeTodotext(event.target.value);
  }
 // to add todo in pending todos
  const addTodo =()=>{
    if(todoText.length>2){
      changePendingTodos([...pendingTodos,todoText]);
    changeTodotext('')
    }
    else{
      changeError('Todo text should be minimum 3 characters')
    }
  }
  // handle cancel button
  const handleCancel =()=>{
    changeTodotext('')
  }
  // clear todo sections
  const clearTodos =(section)=>{
    if(section==='pending'){
      changePendingTodos([]);
    }
    else{
      changeCompletedTodos([]);
    }
  }
  const completeTodo = (index)=>{
    const element =pendingTodos[index];
    changeCompletedTodos([...completedTodos,element]);
    const currentPendingItems =[...pendingTodos];
    currentPendingItems.splice(index,1);
    changePendingTodos(currentPendingItems);
  }
  const deleteTodo = (index,from) =>{
    if(from==='pending'){
      const currentPendingItems = [...pendingTodos];
      currentPendingItems.splice(index,1);
      changePendingTodos(currentPendingItems);
    }
    else{
      const currentCompletedItems = [...completedTodos];
      currentCompletedItems.splice(index,1);
      changeCompletedTodos(currentCompletedItems);
    }

  }

  return (
    <>
    <div className="todo-form text-2xl">
      <h1>Add Todo</h1>
      <input type="text" placeholder="Type todo" value={todoText} onChange={handleInputChange} />
      <span className="error">{error}</span>
      <div className="todo-form-buttons">
        <button class="add-btn" handleClick={()=>addTodo()}>Add</button> 
        <button class="cancel-btn" handleClick={()=>handleCancel()}>Cancel</button>
      </div>
    </div>
    <div className="todo-section">
      <div className="todo-left">
        <h1>Pending Todos ({pendingTodos.length}) <button class="add-btn" handleClick={()=>clearTodos('pending')}>Clear</button> </h1>
        {
          pendingTodos.map((todo,index)=><div className="todo.item">
            <div className="todo.item.text"> ({index+1}) {todo}</div>
            <div className="todo-form-buttons"> <button class="add-btn" handleClick={()=>completeTodo(index)}>Complete</button>
            <button class="delete-btn" handleClick={()=>deleteTodo(index,'pending')}>Delete</button>
            </div>
          </div>)
        }
      </div>
      <div className="todo-right">
      <h1>Completed Todos ({completedTodos.length}) <button class="add-btn" handleClick={()=>clearTodos('completed')}>Clear</button></h1>
      {
         completedTodos.map((todo,index)=><div className="todo.item">
         <div className="todo.item.text">({index+1}){todo}</div>
         <div className="todo-form-buttons"> 
         <button class="delete-btn" handleClick={()=>deleteTodo(index,'completed')}>Delete</button>
         </div>
       </div>)
      }

      </div>
    </div>
    </>
  );
};

export default Addtodo;