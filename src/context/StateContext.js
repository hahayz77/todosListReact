import React, { createContext, useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( { children } ) => {

    const [inputValue, inputChange] = useState("");

    const [doneAnimation, setdoneAnimation] = useState(false);
    
    const [toDoList, setToDoList] = useState(()=>{
        const initialState = localStorage.getItem("toDoList");
        if(initialState){
            return (JSON.parse(initialState));
        }else{
            return ([
                { id: "0", content: "Task 1" },
                { id: "1", content: "Task 2" },
                { id: "2", content: "Task 3" }
            ])
        }
    });
    
    const [doneItems, setdoneItems] = useState(()=>{
        const initialState = localStorage.getItem("doneItems");
        if(initialState){
            return (JSON.parse(initialState));
        } else{
            return([]);
        }
    });   

    useEffect(()=>{
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        localStorage.setItem("doneItems", JSON.stringify(doneItems));
    },[toDoList, doneItems]);
    

    const onAdd = ()=>{
        if(inputValue === ""){
            toast.error("You cannot add a empty task!", {position: "bottom-center"});
            return;
        }

        if(toDoList.length > 0){
            const [lastItem] = toDoList.slice(-1);
            const newId = String(Number(lastItem.id) + 1);
            
            const newItem = {
                id: newId,
                content: inputValue
            }
            setToDoList([...toDoList, newItem]);
            inputChange("");
            toast.success('Task added to the queue', {position: "bottom-center"});
        } else{
            const newItem = {
                id: "0",
                content: inputValue
            }
            setToDoList([newItem]);
            inputChange("");
            toast.success('Task added to the queue', {position: "bottom-center"});
        }
      }

      const onDone = (item)=>{
        const otherTasks = toDoList.filter((e)=> e.id !== item.id);
        setToDoList(otherTasks);
        toast.success(`Task "${item.content}" done!`, {position: "bottom-center"});
        setdoneItems([...doneItems, item]);
        setdoneAnimation(true);
        setTimeout(()=> {setdoneAnimation(false)}, 2000);
      }

      const onDelete = (item)=>{
        const otherTasks = toDoList.filter((e)=> e.id !== item.id);
        setToDoList(otherTasks);
        toast.error(`Task "${item.content}" deleted!`, {position: "bottom-center"});
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
            setdoneItems,
            doneAnimation
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);