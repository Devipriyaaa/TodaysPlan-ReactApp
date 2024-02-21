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
    <div className="text-white p-40">
      <form onSubmit={handleSubmit(myfunc)} class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 text-white"
          >
            Today's Plan
          </label>
          <input
            name="task"
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:shadow-sm-light"
            placeholder="What's Your Today Plan?"
            required
            {...register("task")}
          />
        </div>
        <button type="submit" class="text-white bg-black rounded-mb">
          Submit
        </button>
      </form>
      <p>{Add.task}</p>
    </div>
    
  );
};

export default Addtodo;