import axios from "axios"
import { AiOutlineMenu } from 'react-icons/ai'
const Get = async (slug, chapter) =>{
    const data  = await axios.get(`http://localhost:4000/kr/komik/${slug}/${chapter}`)
    return data.data
}

export default async function Chapter({params}){
    const chapter = params.chapter
    const slug = params.slug
    const pic = await Get(slug, chapter)


    return(
        <div className="absolute w-full h-full bg-white z-10 flex justify-center">
            <div className="w-[50%] flex flex-col ">
                {pic.map((val, i) =>{
                    return <img src={val} alt="" />
                })}
            </div>
        </div>
    )
}