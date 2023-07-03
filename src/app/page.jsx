"use client"

import Slider from "@/components/index components/slider"
import Poster from "@/components/index components/poster"
import { useEffect, useRef, useState } from "react"

export default function Home() {
    const [slideNow, setSlideNow] = useState(1)
    const slider = useRef()

    useEffect(() =>{
        const object = slider.current
        object.children[0].classList.replace('hidden', 'flex')
    }, [])

    const slide = () =>{
        const object = slider.current
        
        if(slideNow + 1 >= (object.children.length - 1)){
            setSlideNow(0)
        }

        console.log(object.children.length - 2, slideNow, slideNow >= object.children.length - 5);

        object.children[slideNow - 1 != -1 ? slideNow - 1 : 4].classList.replace('flex', 'hidden')
        object.children[slideNow].classList.replace('hidden', 'flex')
        
        setSlideNow(slideNow + 1)
    }

    return(
        <div className="w-full h-full flex flex-col items-center">
            <div onClick={slide} ref={slider} className="w-[80%] h-96 bg-discord-gray-400 rounded-2xl py-[25px] px-10 mt-10 flex flex-shrink-0">
                <Slider a={1} /><Slider a={2}/><Slider a={3}/><Slider a={4}/><Slider a={5}/>
            </div>
            <div className="w-[80%] mt-12">
                <p className="font-bold text-2xl mb-0">Recently Added</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-x-8 w-[100%]">
                    <Poster/><Poster/><Poster/><Poster/><Poster/><Poster/><Poster/><Poster/><Poster/><Poster/>
                </div>
            </div>
        </div>
    )
}