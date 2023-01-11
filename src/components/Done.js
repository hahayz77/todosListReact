import { Fragment, useState } from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import { useStateContext } from "../context/StateContext";
import SvgComponent from "./SvgComponent";
 
export default function Example() {
    const { doneItems, setdoneItems } = useStateContext();

    const [open, setOpen] = useState(false);
 
     const handleOpen = () => setOpen(!open);
 
    return (
        <Fragment>
            <div onClick={handleOpen} className="relative mt-6 mb-3 cursor-pointer">
                <SvgComponent comp={"done-tasks"}/>
            </div>
        <Dialog open={open} handler={handleOpen} className="w-[90vh] max-w-[90vw] sm:mx-0">
            <DialogHeader>Tasks Done!</DialogHeader>
            <DialogBody divider>
                {doneItems.length === 0 && <div className="mx-auto"><br/><h1>Empty</h1><br/></div>}
                <ul className='inline-flex flex-wrap'>
                {doneItems.map((task, index)=>{
                    return(<li key={index} className='my-2 pl-0 sm:pl-3 text-teal-900 text-xs'> &#x2705; {task.content}</li>)
                    })}
                </ul>
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="red" onClick={()=>{setdoneItems([])}} className="mr-1"><span>Clear</span></Button>
                <Button variant="text" color="red" onClick={handleOpen} className="mr-1"><span>Close</span></Button>
            </DialogFooter>
        </Dialog>
        </Fragment>
  );
}