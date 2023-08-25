import ButtonManga from "@/components/managa components/buttonManga"
import { BsBook } from "react-icons/bs"
import axios from "axios"
import { AiFillBook, AiFillClockCircle, AiOutlineDownload } from "react-icons/ai"
import GenreButton from "@/components/index components/genre"
import Bar from "@/components/index components/bar"
import Link from "next/link"

async function Get(slug) {
    const data = await axios.get(`http://127.0.0.1:4000/kr/komik/${slug}`)
    return data.data
}

export default async function MangaTitle({params}){
    const slug = params.slug
    const manga = await Get(slug)

    return(
        <div className="">
            <Bar/>
            <img src={manga.cover} className="absolute top-0 w-full scale-110 h-[100%] object-cover object-center ob blur" alt="" />


            <div className="w-full relative top-[300px] bg-white flex">

                <div className="w-[20%] flex items-end relative flex-col">
                    <div className="w-[90%] relative -translate-y-1/2">
                        <img src={manga.cover} alt="" className=" w-full relative"/>
                        <div className="h-0">
                            <div className="font-bold text-sm">Title : <span className="text-black text-opacity-60 font-bold">{manga.title}</span></div>
                            <div className="font-bold text-sm">Alternative Title : <span className="text-black text-opacity-60 font-bold">{manga.alt}</span></div>
                            <div className="font-bold text-sm">Status : <span className="text-black text-opacity-60 font-bold">{manga.info.status}</span></div>
                            <div className="font-bold text-sm">Type : <span className="text-black text-opacity-60 font-bold">{manga.info.type}</span></div>
                            <div className="font-bold text-sm">Released Date : <span className="text-black text-opacity-60 font-bold">{manga.info.released}</span></div>
                            <div className="font-bold text-sm">Author : <span className="text-black text-opacity-60 font-bold">{manga.info.Author}</span></div>
                            <div className="font-bold text-sm">Genre :
                                <span className="flex">
                                    {manga.genre.map((val, i) =>{
                                        return <GenreButton genre={'edhabd'}/>
                                    })}
                                </span>
                            </div>

                        </div>
                    </div>

                    
                </div>                                      

                <div className="w-[75%] h-full ml-4 flex flex-col gap-4 relative">
                    <div>
                        <h1 className="text-2xl font-bold">{manga.title}</h1>
                        <h2 className="text-lg font-semibold text-black text-opacity-70">{manga.alt}</h2>
                    </div>
                    <div className="flex justify-between w-[70%]">
                        <ButtonManga text={"Read Now"} icon={<BsBook size={30}/>} color={"bg-orange-400"} slug={manga.slug} link={manga.chapter[manga.chapter.length - 1].chapterLink} />
                        <ButtonManga text={"Recent Chapter"} icon={<AiFillClockCircle size={30}/>} color={"bg-gray-300"} slug={manga.slug} link={manga.chapter[0].chapterLink}/>
                        <ButtonManga text={"Add To Library"} icon={<AiFillBook size={30}/>} color={"bg-gray-300"}/>
                        <ButtonManga icon={<AiOutlineDownload size={30}/>} color={"bg-gray-300 !gap-0"}/>
                    </div>
                    <div> {manga.synopsis} </div>
                    <div className="bg-gray-300 w-full h-[400px] rounded-lg p-4">
                        <ul className="w-full h-[100%] overflow-auto scrollbar-thin">
                            {manga.chapter.map((val, i) =>{
                                    return(
                                        <Link href={`${manga.slug}/${val.chapterLink}`}>
                                            <li className="flex justify-between border-b-2 border-gray-800">
                                                <div >
                                                    <h2 className="text-lg font-semibold">Chapter {val.chapter}</h2>
                                                    <p className="text-xs text-black text-opacity-70"> {val.date} </p> 
                                                </div>
                                                <ButtonManga icon={<AiOutlineDownload size={30}/>} color={"bg-gray-300 !gap-0"}/>
                                            </li>
                                        </Link>
                                    )
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}