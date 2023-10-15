

import { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {GrFormClose} from "react-icons/gr"

export default function CheckBox ({Genre, List}){
    const [checked, setChecked] = useState(false);



    const handleCheked = () =>{
        setChecked(!checked)
        List.push(Genre)
    }


  return (
    <div className="flex items-center space-x-2">
      <input 
        id={Genre} 
        type="checkbox" 
        className="hidden" 
        checked={checked} 
        onChange={handleCheked}
      />


      <label htmlFor={Genre} className={`p-1 text-sm cursor-pointer ${checked ? 'bg-orange-400' : 'bg-white'} rounded-md select-none flex items-center font-bold `}>
        {Genre} <span className={`ml-2 ${checked ? " rotate-0" :  " rotate-45"} duration-150`}> <GrFormClose size={18}/> </span>
      </label>


    </div>
  );
}