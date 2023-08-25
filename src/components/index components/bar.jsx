"use client"

import { useEffect, useRef, useState  } from 'react'
import { CgProfile } from 'react-icons/cg'

export default function Bar(){
    const [scroll, setScroll] = useState(null)
    const bar = useRef()
    useEffect(() =>{
        const element = bar.current
        window.addEventListener("scroll", () =>{
            if (!scrollY == 0) {
                element.classList.replace("bg-[rbga(256,256,256,0)]", "bg-white")
            }else{
                element.classList.replace( "bg-white", "bg-[rbga(256,256,256,0)]")
            }
            console.log(scrollY);
        })
    }, [scroll])
 
    return(
        <div className="w-full p-1 px-[5%] h-16 fixed flex items-center justify-between top-0 z-50 bg-[rbga(256,256,256,0)] xs:h-14" ref={bar}>
            <div className="h-full w-[10%] text-2xl flex items-center">
                <a href='/'>
                    <h1>LOGO</h1> 
                </a>
            </div>

            <div className="h-full w-[50%] flex items-center justify-end">
                <form action="/search" className=" w-[70%] h-full flex items-center">
                    <input type="text" className="w-full h-[70%] border rounded-full border-black " name='title'/>
                </form>

                <div className="w-10 h-10 bg-slate-500 rounded-full ml-6"><CgProfile  className='w-10 h-10' color='white'/></div>
            </div>
        </div>
    )
}