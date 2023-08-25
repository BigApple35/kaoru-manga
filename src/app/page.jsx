"use client"


import axios from'axios'
import { useState, useEffect } from 'react'
import Slider from "@/components/index components/slider"
import Poster from "@/components/index components/poster"
import SwiperButton from "@/components/index components/swiperButton"
import Bar from "@/components/index components/bar"
import Table from "@/components/index components/table"
import Card from "@/components/index components/card"

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules"
import { Navigation } from 'swiper/modules';
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"

 

export default function Home() {
    const [popular, setPopular] = useState(null)
    const [recommended, setRecommended] = useState(null)
    const [popularCard, setPopularCard] = useState(null)
    const [update, setUpdate] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(() =>{
        setIsLoading(true)

        axios.get('http://localhost:4000/kr/popular')
            .then((data) =>{
                setPopular(data.data.weekly)
            })

        axios.get('http://localhost:4000/kr/update')
            .then((data) =>{
                setUpdate(data.data.slice(0, 16))
                
                console.log(update);
            })

        axios.get('http://localhost:4000/kr/recommended')
            .then((data) =>{
            setRecommended(data.data)
            console.log(recommended);
        })
        
        axios.get('http://localhost:4000/kr/list?order=popular')
                    .then((data) =>{
                    setPopularCard(data.data.slice(0, 15))
                    console.log(popularCard);
                    setIsLoading(false)
                })

    },[])

    if (isLoading) return <p></p>;

    return(
        <div className="w-full h-full flex flex-col items-center">
            <Bar/>


            <div className="relative w-[90%] xs:w-full h-96 xs:h-[20rem] mt-10">
                <Swiper loop={true} className="w-full h-full bg-gray-300 shadow-lg xs:rounded-none rounded-md xs:[&>*:nth-child(n+2)]:hidden">
                    {popular.map((val, i)=>{
                        return(
                            <SwiperSlide key={i} className="xs:py-0 pr-10 xs:px-0 flex flex-col"><Slider title={val.title} cover={val.img} genre={val.genre}/></SwiperSlide>
                        )
                    })}
                    <SwiperButton/>
                </Swiper>
            </div> 
           
            
            <div className="flex justify-between w-[90%] mt-20">
                    <p className="font-semibold text-2xl mb-2">{'Recently Added'}</p>
            </div>
            <div className="w-[90%] h-[600px] rounded-xl grid gap-4 gap-y-2 grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:[&>*:nth-child(n+13)]:hidden lg:[&>*:nth-child(n+13)]:hidden md:[&>*:nth-child(n+9)]:hidden sm:[&>*:nth-child(n+9)]:hidden xs:[&>*:nth-child(n+8)]:hidden">
                {update.map((val, i) =>{
                    return(
                        <Table title={val.title} chapter={val.chapter}  cover={val.cover} key={i} slug={val.slug} />
                    )
                })}
            </div>
             
 
            <div className="flex justify-between w-[90%] mt-20">
                    <p className="font-bold text-2xl mb-4">Popular</p>
            </div>
            <div className="w-[90%]">
                <Swiper className="w-full h-full" 
                    freeMode={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        1280:{
                            slidesPerView : 8,
                            spaceBetween : 20
                        },
                        860:{
                            slidesPerView : 6,
                            spaceBetween : 20  
                        },   
                        763:{
                            slidesPerView : 5,
                            spaceBetween : 20  
                        },
                        640:{
                            slidesPerView : 4,
                            spaceBetween : 10
                        },
                        400:{
                            slidesPerView : 3,
                            spaceBetween : 10
                        }
                    }}
                    >

                    {popularCard.map((val, i)=>{
                        return  (
                            <SwiperSlide><Card cover={val.cover} title={val.title} info={''} slug={val.slug}/></SwiperSlide>
                        )
                    })}
                    

                </Swiper>    
            </div>
            
            
            

            <div className="flex justify-between w-[90%] mt-20">
                    <p className="font-bold text-2xl mb-4">Recomended</p>
            </div>
            <div className="w-[90%] h-64">
                <Swiper className="w-full h-full" 
                    freeMode={true}
                    spaceBetween={10}
                    slidesPerView={2}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                        1280:{
                            slidesPerView : 8,
                            spaceBetween : 20
                        },
                        860:{
                            slidesPerView : 6,
                            spaceBetween : 20  
                        },   
                        763:{
                            slidesPerView : 5,
                            spaceBetween : 20  
                        },
                        640:{
                            slidesPerView : 4,
                            spaceBetween : 10
                        },
                        400:{
                            slidesPerView : 3,
                            spaceBetween : 10
                        }
                    }}> 
                    
                    {recommended.map((val, i)=>{
                        return <SwiperSlide><Card title={val.title} cover={val.cover} info={`Chapter ${val.chapter}`} slug={val.slug}/></SwiperSlide>
                    })}
                    

                </Swiper>    
            </div>
        </div>
    )
}