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
  const [todotext,changeTodotext] = useState('');

  // funcvtion to update todo text
  const handleInputChange =(event)=> {
  
  changeTodotext(event.target.value);
  }
 
  const addTodo =() =>(
    changePendingTodos([...pendingTodos,todotext])
  )
  return (
    <>
    <div className="text-black p-40">
      <form onSubmit={handleSubmit(myfunc)} class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="text"
            class="block mb-2 text-3xl font-medium text-gray-900 text-black"
          >
            Today's Plan
          </label>
          <input type="text-black" value={todotext} onChange={handleInputChange} /> 
        </div>
        <div className="todo-form-buttons">
        <Button class="add-btn" handleClick={()=>{}} btnText="Add" >Add</Button>
        <Button class="cancel-btn" handleClick={()=>{}} btnText="Cancel" >Cancel</Button>
        </div>
      </form>
      <p>{Add.task}</p>
    </div>
    <div className="todo-section">
      <div className="todo-left">
        <h1>Pending Todos ({pendingTodos.length}) <button class="add-btn" handleClick={()=>{}}>Clear</button> </h1>
        {
          pendingTodos.map((todo,index)=><div className="todo.item">
            <div className="todo.item.text">({index+1}){todo}</div>
            <div className="todo-form-buttons"> <button class="add-btn" handleClick={()=>addTodo()}>Complete</button>
            <button class="add-btn" handleClick={()=>{}}>Delete</button>
            </div>
          </div>)
        }
      </div>
      <div className="todo-right">
      <h1>Completed Todos ({completedTodos.length}) <button class="add-btn" handleClick={()=>{}}>Clear</button></h1>
      {
         completedTodos.map((todo,index)=><div className="todo.item">
         <div className="todo.item.text">({index+1}){todo}</div>
         <div className="todo-form-buttons"> 
         <button class="add-btn" handleClick={()=>{}}>Delete</button>
         </div>
       </div>)
      }

      </div>
    </div>
    </>
  );
};

export default Addtodo;