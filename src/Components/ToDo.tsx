import { useState } from "react";

export interface ToDoItem{
  id:number;
  text:string;
  completed:boolean;
}
const ToDo=()=>{
    const [toDo, setToDo] = useState<string>("");
      const [toDoList, setToDoList] = useState<ToDoItem[]>([]);
      const [editId, setEditId] = useState<number | null>(null);
    
      const AddToDo=()=>{
        if(toDo.trim()=="") return;
        const isDuplicate = toDoList.some(item=>item.text.toLowerCase()==toDo.toLowerCase());
        const isOnlyNumbers = /^[0-9]+$/.test(toDo.trim());
        if(isDuplicate){
          return alert("Tasks already exists");
        }
        if(isOnlyNumbers){
          return alert("Numbers not allowed as task");
        }
        if(editId){
          const updatedItem = toDoList.map((item)=>
            item.id===editId ? {...item, text:toDo} : item
          );
          setToDoList(updatedItem);
          setEditId(null);
          setToDo("");
        }
        else{
        const newItem:ToDoItem = {id:Date.now(),text:toDo,completed:false};
        setToDoList([...toDoList,newItem]);
        setToDo("");
        }
      }
      const handleToggle=(id:number)=>{
        const updatedItem=toDoList.map((item)=>
        item.id===id ? {...item,completed:!item.completed}:item)
        setToDoList(updatedItem);
      }
      const handleDelete=(id:number)=>{
        const updatedItem = toDoList.filter((item)=>item.id!==id);
        setToDoList(updatedItem);
      }
      const handleEdit=(id:number)=>{
        const currentItem = toDoList.find((item)=>item.id===id);
        if(currentItem){
          setToDo(currentItem.text);
          setEditId(id);
        }
        else{
          console.warn("Item not found for edit",id);
        }
      }
      const clearCompleted=()=>{
        const updatedItem=toDoList.filter((item)=>!item.completed);
        setToDoList(updatedItem);
      }
    return(
        <>
        <div className="min-h-screen w-full flex flex-col items-center p-8">
            <h1 className='text-3xl font-bold mb-6 underline'>To Do List</h1>
            <div className='flex gap-2 mb-6'>
            <input type="text" className="border px-3 py-2 rounded w-64" value={toDo} placeholder="Add task..." onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setToDo(e.target.value)} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={AddToDo}>{editId ? "Update" : "Add"}</button>
            </div>
            <ul className="w-80">
            {toDoList.map((item)=>{
            return(
                <div key={item.id} className="flex justify-between items-center bg-white px-4 py-2 mb-2 rounded shadow">
                
                <label className='flex gap-2 items-center'>
                <input className="w-5 h-5 cursor-pointer accent-blue-600" type="checkbox" onChange={()=>handleToggle(item.id)}/>
                <span className={`${item.completed ? "line-through text-gray-400 text-2xl" : "text-2xl text-gray-800"}`}>{item.text}</span>
                </label>
                <div className='flex gap-3 items-center'>
                <button className="text-red-500 hover:text-red-700" onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=>handleEdit(item.id)} disabled={item.completed}>Edit</button>
                </div>
                </div>
            )
            })}
            </ul>
            {toDoList.some((t)=>t.completed) && (
            <button className="mt-4 text-sm text-gray-600 hover:text-black" onClick={clearCompleted}>Clear Completed</button>
            )}
        </div>
        </>
    )
}

export default ToDo;