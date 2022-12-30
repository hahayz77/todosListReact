import React from 'react';
import SvgComponent from './SvgComponent';

export default function Tasks(props){
    
    return (
        <div className='flex flex-wrap rounded-lg hover:bg-teal-50'>
            <li className='my-2 pl-3 basis-10/12 text-teal-900'>{props.content}</li>
            <SvgComponent comp={"done"} props={props} />
            <SvgComponent comp={"delete"} props={props} />
		</div>
    )
}