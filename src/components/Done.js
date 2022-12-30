import { Fragment, useState } from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import { useStateContext } from "../context/StateContext";
 
export default function Example() {
    const { doneItems, setdoneItems } = useStateContext();

    const [open, setOpen] = useState(false);
 
     const handleOpen = () => setOpen(!open);
 
    return (
        <Fragment>
            <div onClick={handleOpen} className="relative mt-6 mb-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 48 48" className='absolute bottom-[-40px] right-[-20px] h-[60px] p-2 hover:opacity-100 opacity-90 bg-white rounded-full hover-scale'><linearGradient id="wi9reJZsYu2bf~DD3zafra_IJNt9jGwqy9N_gr1" x1="27" x2="27" y1="12.101" y2="42.032" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#wi9reJZsYu2bf~DD3zafra_IJNt9jGwqy9N_gr1)" d="M40,42H14c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C42,41.1,41.1,42,40,42z"></path><path d="M38,12H12v26h22.319C36.352,38,38,36.352,38,34.319V12z" opacity=".05"></path><path d="M37,12H12v25h22.161C35.729,37,37,35.729,37,34.161V12z" opacity=".07"></path><linearGradient id="wi9reJZsYu2bf~DD3zafrb_IJNt9jGwqy9N_gr2" x1="21" x2="21" y1="6.101" y2="36.032" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce"></stop><stop offset="1" stop-color="#50d18d"></stop></linearGradient><path fill="url(#wi9reJZsYu2bf~DD3zafrb_IJNt9jGwqy9N_gr2)" d="M34,36H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C36,35.1,35.1,36,34,36z"></path><linearGradient id="wi9reJZsYu2bf~DD3zafrc_IJNt9jGwqy9N_gr3" x1="12" x2="31" y1="20.793" y2="20.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36"></stop><stop offset=".931" stop-color="#125933"></stop><stop offset="1" stop-color="#11522f"></stop></linearGradient><path fill="url(#wi9reJZsYu2bf~DD3zafrc_IJNt9jGwqy9N_gr3)" d="M18.293,27.707l-6-6c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L19,22.758l8.879-8.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-11,11C19.317,28.098,18.683,28.098,18.293,27.707z"></path></svg>
            </div>
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Tasks Done!</DialogHeader>
            <DialogBody divider>
                {doneItems.length === 0 && <div className="mx-auto"><br/><h1>Empty</h1><br/></div>}
                <ul className='inline-flex flex-wrap'>
                {doneItems.map((task, index)=>{
                    return(<li key={index} className='my-2 pl-3 text-teal-900 text-xs'> &#x2705; {task.content}</li>)
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