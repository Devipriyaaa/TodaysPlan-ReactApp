import React, { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from '../supabase/Supabase'

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

  return (
    <div className="text-white p-40 ">
      <form onSubmit={handleSubmit(myfunc)} class="max-w-sm mx-auto">
        <div class="mb-5 ">
          <label
            for="text"
            class="block mb-2 text-4xl font-medium text-gray-900 text-white"
          >
            Today's Plan
          </label>
          <input
            name="task"
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white bg-transparent dark:focus:ring-blue-500 dark:shadow-sm-light"
            placeholder="What's Your Today Plan?"
            required
            {...register("task")}
          />
        </div>
        <button type="submit" class="text-white  border-2 p-1 rounded-md">
          Submit
        </button>
      </form>
      <p>{Add.task}</p>
    </div>
  );
};

export default Addtodo;
