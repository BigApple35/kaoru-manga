'use client'

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"
import { MdFilterListAlt } from "react-icons/md"
import  GenreBubble  from "@/components/mangalist components/GenreBubble.jsx"
import CheckBox from "./CheckBox";

export default function Dropdown({Title, Content, Color, Height, AutoClosed, genreList}) {
    const area = useRef()
    const [genre, setGenre] = useState(null)
    const [loading, setLoading] = useState(true)
    const ChekedGenre = []
    let open = false


    const dropdown = (e) =>{
        console.log(open);
        e.stopPropagation()
        if(!open){
            window.addEventListener("click",function(event) {    
                const drop = area.current
                drop.classList.replace(`h-72`, 'h-0')
                open = !open
                return
            }, {once : true})

            area.current.classList.replace('h-0', `h-72`)
            open = !open 
            return
        } 

       
        area.current.classList.replace(`h-72`, 'h-0')
        open = !open 
    } 

    const Drop = (e) => {
        if(!AutoClosed){
            e.stopPropagation()
        }
    }



    return(
        <div className="">
            <div className="h-12 w-full">
                <div className={` ${Color} h-full p-4 flex items-center justify-between pr-6 font-bold select-none rounded-md`} onClick={dropdown}>
                    <div className="flex  gap-1 w-[90%] overflow-hidden">
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>
                        <GenreBubble Genre={"Action"}/>

                    </div>

                    <div className="">
                        <MdFilterListAlt size={25}/>
                    </div>
                </div>
                <div className="bg-gray-200 h-0 duration-200 origin-top overflow-auto text-sm font-semibold scrollbar-thin rounded-b-sm mt-10" ref={area} onClick={Drop}>
                    <div className=" flex m-4 flex-wrap gap-2 ">
                        {
                            genreList.map((val, i) =>{
                                return(
                                    <CheckBox Genre={val.genre} List={ChekedGenre} key={i}/>)
                            })
                        }
                        {ChekedGenre}
                    </div>
                </div>
            </div>
        </div>
    )
}