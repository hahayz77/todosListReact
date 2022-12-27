import './App.css';
import { Button, Input } from "@material-tailwind/react";
import { useStateContext } from './context/StateContext';
import Tasks from "./components/Tasks";
import Done from "./components/Done";


function App() {

	const { inputValue, inputChange, toDoList, onAdd } = useStateContext();

  	return (
    <div className='mx-auto max-w-4xl mt-10 mb-8 py-6 rounded-3xl bg-opacity-90 bg-white'>
		<div className="flex flex-col justify-center max-w-3xl mx-auto">
		<svg className='h-32 done-animation' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1" x1="21.241" x2="3.541" y1="39.241" y2="21.541" gradientUnits="userSpaceOnUse"><stop offset=".108" stopColor="#0d7044"></stop><stop offset=".433" stopColor="#11945a"></stop></linearGradient><path fill="url(#HoiJCu43QtshzIrYCxOfCa_VFaz7MkjAiu0_gr1)" d="M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z"></path><linearGradient id="HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2" x1="-15.77" x2="26.403" y1="43.228" y2="43.228" gradientTransform="rotate(134.999 21.287 38.873)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2ac782"></stop><stop offset="1" stopColor="#21b876"></stop></linearGradient><path fill="url(#HoiJCu43QtshzIrYCxOfCb_VFaz7MkjAiu0_gr2)" d="M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z"></path></svg>
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
						<svg className='h-11 ml-2 py-0 opacity-80 hover:opacity-70' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="url(#dyoR47AMqzPbkc_5POASHa_aWZy3jlAFSa9_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M34,21h-7v-7c0-1.105-0.895-2-2-2h-2c-1.105,0-2,0.895-2,2v7h-7	c-1.105,0-2,0.895-2,2v2c0,1.105,0.895,2,2,2h7v7c0,1.105,0.895,2,2,2h2c1.105,0,2-0.895,2-2v-7h7c1.105,0,2-0.895,2-2v-2	C36,21.895,35.105,21,34,21z" opacity=".05"></path><path d="M34,21.5h-7.5V14c0-0.828-0.672-1.5-1.5-1.5h-2	c-0.828,0-1.5,0.672-1.5,1.5v7.5H14c-0.828,0-1.5,0.672-1.5,1.5v2c0,0.828,0.672,1.5,1.5,1.5h7.5V34c0,0.828,0.672,1.5,1.5,1.5h2	c0.828,0,1.5-0.672,1.5-1.5v-7.5H34c0.828,0,1.5-0.672,1.5-1.5v-2C35.5,22.172,34.828,21.5,34,21.5z" opacity=".07"></path><linearGradient id="dyoR47AMqzPbkc_5POASHb_aWZy3jlAFSa9_gr2" x1="22" x2="26" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"></stop><stop offset=".931" stopColor="#125933"></stop><stop offset="1" stopColor="#11522f"></stop></linearGradient><path fill="url(#dyoR47AMqzPbkc_5POASHb_aWZy3jlAFSa9_gr2)" d="M23,13h2c0.552,0,1,0.448,1,1v20c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1V14	C22,13.448,22.448,13,23,13z"></path><linearGradient id="dyoR47AMqzPbkc_5POASHc_aWZy3jlAFSa9_gr3" x1="13" x2="35" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"></stop><stop offset=".931" stopColor="#125933"></stop><stop offset="1" stopColor="#11522f"></stop></linearGradient><path fill="url(#dyoR47AMqzPbkc_5POASHc_aWZy3jlAFSa9_gr3)" d="M35,23v2c0,0.552-0.448,1-1,1H14c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h20	C34.552,22,35,22.448,35,23z"></path></svg>
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
