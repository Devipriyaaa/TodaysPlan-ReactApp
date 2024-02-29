import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Route } from "react-router-dom"
import supabase from '../supabase/Supabase'

const Addtodo = () => {

  const [todoText, changeTodotext] = useState('');
  const [todo, setTodo] = useState([])
  const [count, setcount] = useState(1)

  const getData = async () => {
    const { data, error } = await supabase
      .from('TODOLIST')
      .select()

    setTodo(data)

    console.log("error : " + JSON.stringify(error))
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('TODOLIST')
      .upsert(
        { text: todoText },
      )
      .select()
    if (error) return console.log("error : " + JSON.stringify(error))

    setTodo([...todo, data[0]])

    console.log("data : " + JSON.stringify(data[0]))

    changeTodotext('')
  }


  return (
    <>
      <form>
        <div className=" text-white todo-form text-2xl">
          <h1 className="text-3xl my-6">Add Todo</h1>
          <div className="flex gap-5">
            <input className="text-black" onChange={(a) => {
              changeTodotext(a.target.value)
            }} type="text" placeholder="Type todo" value={todoText} />

            <div className="flex gap-3 ">
              <button onClick={(e) => handleClick(e)} class="bg-blue-600 p-3 rounded">Add</button>
              <button onClick={(g) => {
                g.preventDefault()
                changeTodotext('')
              }} class="bg-red-900 px-3 rounded">Cancel</button>
            </div>
          </div>
        </div>
      </form>
      <div className="items-center text-white text-2xl p-6 flex flex-col gap-6">
        <h1 className="text-white text-3xl">MyTodos</h1>
        <div className="flex flex-col gap-3 ">
          {
            todo && todo?.map((t) => (
              <div className={`text-black ${t.status ? "bg-green-500" : "bg-gray-200"} w-[400px] py-3 px-3 rounded-lg flex justify-between `}>
                <svg onClick={async()=>{
                  todo.map((r)=> {
                    if(r.id == t.id){
                      r.status = true
                    }
                  })
                  console.log(todo) 
                  setTodo(todo)
                  
                  const { data, error } = await supabase
                    .from('TODOLIST')
                    .update({ status: true })
                    .eq('id', t.id)
                    .select()

        
                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                
                <h1>{t.text}</h1>
                <svg onClick={async () => {
                  const result = todo.filter((to) => to.id !== t.id)
                  console.log(result)
                  

                  const { error } = await supabase
                    .from('TODOLIST')
                    .delete()
                    .eq('id', t.id)


                  setTodo(result)
                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>





              </div>

            ))
          }
        </div>

      </div>
    </>
  );

};

export default Addtodo;