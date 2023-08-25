'use client'

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"

export default function GenreDrop() {

    const [genre, setGenre] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() =>{
        axios.get('http://127.0.0.1:4000/kr/genre')
            .then((data) =>{
                setGenre(data.data)
                console.log(data.data);
                setLoading(false)
            })
    }, [])

    
    if(loading) {
        return(
            <div className="">
                <div className="h-8">
                    <div className="bg-gray-300 h-0 duration-200 origin-top overflow-auto w-full absolute right-0 text-sm font-semibold scrollbar-thin rounded-sm">
                        loading
                    </div>
                </div>
            </div>
        )
    }

    return(
            <div>
                <ul className="grid grid-cols-4 p-2 ">
                    {genre.map((val, i) =>{
                        return(
                            <li  className="whitespace-nowrap overflow-hidden flex gap-1">
                                <input type="checkbox" name="genre" id={val.number} value={val.number} className="appearance-none bg-white checked:bg-light-second-200 rounded border-2 border-black w-4 h-4 checked:before:content-['✔'] flex items-center"/>
                                <label htmlFor={val.number} className="w-[80%] select-none"><p className="text-ellipsis overflow-hidden">{val.genre}</p></label>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
    )
}