'use client'

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"

export default function Dropdown({Title, Content}) {
    const area = useRef()
    const [genre, setGenre] = useState(null)
    const [loading, setLoading] = useState(true)
    let open = false

    const dropdown = (e) =>{
        console.log(open);
        e.stopPropagation() 
        if(!open){
            window.addEventListener("click",function(event) {    
                const drop = area.current
                drop.classList.replace('h-60', 'h-0')
                open = !open
                return
            }, {once : true})

            area.current.classList.replace('h-0', 'h-60')
            open = !open 
            return
        } 

       
        area.current.classList.replace('h-60', 'h-0')
        open = !open 
    } 

    const Drop = (e) => {
        e.stopPropagation()
    }



    return(
        <div className="">
            <div className="h-8">
                <div className="bg-light-prim-300 h-full p-4 flex items-center pr-6 font-bold select-none mb-2 rounded-sm" onClick={dropdown}><p>Genre</p></div>
                <div className="bg-gray-300 h-0 duration-200 origin-top overflow-auto w-full absolute right-0 text-sm font-semibold scrollbar-thin rounded-sm" ref={area} onClick={Drop}>
                    {Content}
                </div>
            </div>
        </div>
    )
}