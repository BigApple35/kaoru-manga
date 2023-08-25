"use client"



import  TableSearch  from "@/components/search components/table"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Comps({query}){
    const param = useSearchParams().get('title')
    const [animeSlug, setAnimeSlug] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        axios.get(`http://localhost:4000/kr/search?query=${param}`)
            .then((data) =>{
                setAnimeSlug(data.data)
                console.log(animeSlug); 
                setLoading(false)
            })
    }, []) 
 
    if (loading) return(
        <div className="">
            <div className="mt-8 text-sm">result for {param}</div>
            <div className="w-full grid grid-cols-3 gap-4">
                    <TableSearch/>
            </div>
        </div>
    ) 


    return (
        <div className="">
            <div className="mt-8 text-sm">result for {param}</div>
            <div className="w-full grid grid-cols-3 gap-4">
                    {animeSlug.map((val, i) =>{
                        return <TableSearch title={val.title} cover={val.cover} slug={val.slug} key={i}/>
                    })}
            </div>
        </div>
    )
}