'use client'

import axios from "axios";
import GenreButton from "../index components/genre";
import { useEffect, useState } from "react";

export default function TableSearch({title, cover, genre, synopsis, slug}){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() =>{
        axios.get(`http://127.0.0.1:4000/kr/komik/${slug}`)
            .then((data) =>{
                setData(data.data)
                console.log(data);
                setLoading(false)
            })
    }, [])

    if(loading) return(
        <div className="h-48 flex justify-center items-center rounded-xl bg-gray-300">
            <div className="inline-block w-[30px] h-[30px] border-4 border-black animate-loader">
                <div className="align-top bg-black w-full animate-loader-inner"></div>
            </div>
        </div>
    ) 

    return(
        <div className="bg-[#9BE8D8] rounded-xl h-48 flex gap-2">
            <img src={cover} alt="" className="object-cover w-[25%] rounded-l-xl"/>
            <div className="w-[70%] flex flex-col">
                <h2 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis"> {title} </h2>
                <div className="flex gap-1 flex-wrap [&>*:nth-child(n+6)]:hidden mt-2">
                    <GenreButton genre='Marial A' class='!text-[10px] !p-[3px] py-0'/>
                    {data.genre.map((val, i) =>{
                        return <GenreButton genre={val} class='!text-[10px] !p-[3px] py-0'/>
                    })}
                </div>
                <div className="text-xs hover:overflow-auto overflow-hidden duration-200 h-[60%] mt-2 scrollbar-w-[1px] scrollbar scrollbar-track-rounded-lg">
                    {data.synopsis}
                </div>
            </div>
        </div>
    )
}