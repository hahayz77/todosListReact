import React, { createContext, useContext, useState, useEffect } from "react";
import toast from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( { children } ) => {

    const [inputValue, inputChange] = useState("");
    
    const [toDoList, setToDoList] = useState([
        { id: "0", content: "Task 1", done: false, deleted: false },
        { id: "1", content: "Task 2", done: false, deleted: false },
        { id: "2", content: "Task 3", done: false, deleted: false }
    ]);
    
    const [trashItems, setTrashItems] = useState([]);   
    

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

      const onDelete = (item)=>{
        const otherTasks = toDoList.filter((e)=> e.id !== item.id);
        setToDoList(otherTasks);
        toast.error(`Task "${item.content}" deleted!`);
        setTrashItems([...trashItems, item]);
      }

      const onDone = (e)=>{
        console.log(e);
        alert("onDone");
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
            trashItems
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);