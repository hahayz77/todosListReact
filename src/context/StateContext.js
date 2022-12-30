import React, { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( { children } ) => {

    const [inputValue, inputChange] = useState("");
    
    const [toDoList, setToDoList] = useState([
        { id: "0", content: "Task 1", done: false, deleted: false },
        { id: "1", content: "Task 2", done: false, deleted: false },
        { id: "2", content: "Task 3", done: false, deleted: false }
    ]);
    
    const [doneItems, setdoneItems] = useState([]);   
    

    const onAdd = ()=>{
        if(inputValue === ""){
            toast.error("You cannot add a empty task!");
            return;
        }

        if(toDoList.length > 0){
            const [lastItem] = toDoList.slice(-1);
            const newId = String(Number(lastItem.id) + 1);
            
            const newItem = {
                id: newId,
                content: inputValue,
                done: false,
                deleted: false
            }
            setToDoList([...toDoList, newItem]);
            inputChange("");
            toast.success('Task added to the queue');
        } else{
            const newItem = {
                id: "0",
                content: inputValue,
                done: false,
                deleted: false
            }
            setToDoList([newItem]);
            inputChange("");
            toast.success('Task added to the queue');
        }
      }

    //   function doneAnimation(){
        
    //   }

      const onDone = (item)=>{
        const otherTasks = toDoList.filter((e)=> e.id !== item.id);
        setToDoList(otherTasks);
        toast.success(`Task "${item.content}" done!`);
        setdoneItems([...doneItems, item]);
      }

      const onDelete = (item)=>{
        const otherTasks = toDoList.filter((e)=> e.id !== item.id);
        setToDoList(otherTasks);
        toast.error(`Task "${item.content}" deleted!`);
      }
    
    return(
        <Context.Provider value={{
            inputValue,
            inputChange,
            toDoList,
            setToDoList,
            onAdd,
            onDone,
            onDelete,
            doneItems,
            setdoneItems
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);