import './App.css';
import { Button, Input } from "@material-tailwind/react";
import { useStateContext } from './context/StateContext';
import Tasks from "./components/Tasks";
import Done from "./components/Done";
import SvgComponent from './components/SvgComponent';


function App() {

	const { inputValue, inputChange, toDoList, onAdd } = useStateContext();

  	return (
		<main>
			<section className='mx-auto mt-10 mb-8 py-6 rounded-3xl bg-opacity-90 bg-white lg:max-w-4xl lg:px-6 md:max-w-3xl min-w-xs px-6'>
				<div className="flex flex-col justify-center max-w-3xl mx-auto">
				<SvgComponent comp={"done-signal"} />
					<h1 className='font-bold text-6xl text-center mb-6 text-teal-700'>To Do's</h1>
					<form action="#" onSubmit={(e)=>{ e.preventDefault() }}>
						<div className="my-3 grid gap-x-2 grid-cols-12">
							<div className='sm:col-span-9 col-span-12'>
								<Input onKeyDown={(e)=>{e.code === "Enter" && onAdd()}} color="teal" label="Input Task" size="lg" value={inputValue}
								onChange={(e)=>{inputChange(e.target.value)}}
								/>
							</div>
							<div className='sm:col-span-3 col-span-12 place-self-center mt-3 sm:mt-0'>
								<Button onClick={onAdd} className='inline-flex items-center py-0 px-2 font-black text-teal-800 text-base bg-gradient-to-br from-[#50d18d] to-[#9dffce] hover:bg-gradient-to-bl hover:from-[#50d18d] hover:to-[#9dffce] hover-scale hover:scale-110' size="md" color='teal'>Send Task 
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
		</section>
			<footer className='fixed opacity-40 sm:bottom-0 bottom-[-30px] left-0 right-0 text-center text-[10px] hidden xs:block'>
					<p>Maded by github.com/hahayz77 © 2023</p>
			</footer>
	</main>
  );
}

export default App;
