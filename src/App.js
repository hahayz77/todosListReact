import './App.css';
import { Button, Input } from "@material-tailwind/react";
import { useStateContext } from './context/StateContext';
import Tasks from "./components/Tasks";
import Done from "./components/Done";
import SvgComponent from './components/SvgComponent';


function App() {

	const { inputValue, inputChange, toDoList, onAdd } = useStateContext();

  	return (
    <div className='mx-auto max-w-4xl mt-10 mb-8 py-6 rounded-3xl bg-opacity-90 bg-white'>
		<div className="flex flex-col justify-center max-w-3xl mx-auto">
		<SvgComponent comp={"done-signal"} />
			<h1 className='font-bold text-6xl text-center mb-6 text-teal-700'>To Do's</h1>
			<form action="#" onSubmit={(e)=>{ e.preventDefault() }}>
				<div className="my-3 grid gap-x-4 grid-cols-12">
					<div className='col-span-9'>
						<Input onKeyDown={(e)=>{e.code === "Enter" && onAdd()}} color="teal" label="Input Task" size="lg" value={inputValue}
						onChange={(e)=>{inputChange(e.target.value)}}
						/>
					</div>
					<div className='col-span-3'>
						<Button onClick={onAdd} className='inline-flex items-center py-0 font-black text-teal-500 text-base px-3 bg-gradient-to-l from-teal-100 to-white hover:bg-gradient-to-l hover:from-white hover:to-teal-100 hover-scale hover:scale-110' size="md" color='teal'>Send Task 
						<SvgComponent comp={"plus-signal"}/>
						</Button>
					</div>
				</div>
			<hr className="mb-6 mx-auto w-12/12 h-0.5 bg-teal-100 rounded border-0 opacity-50"/>
			</form>
			<ul>
				{toDoList.map((e, index)=>{return (<Tasks content={e.content} key={index} id={e.id}/>)})}
			</ul>
		</div>
		<Done/>
	</div>
  );
}

export default App;
