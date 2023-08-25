import Link from "next/link"
import { BsBook } from "react-icons/bs"

export default function ButtonManga({text, icon, color, slug, chapter, link}){

    if (!slug){
        return (
            <div className={`flex ${color} p-2 px-4 rounded-lg gap-10 items-center `}>
                <p className="w-auto text-xl font-bold">{text}</p>
                <span>{icon}</span>
            </div>
        )
    }

    return(
            <Link href={`${slug}/${link ? link : ''}`}>
            <div className={`flex ${color} p-2 px-4 rounded-lg gap-10 items-center `}>
                <p className="w-auto text-xl font-bold">{text}</p>
                <span>{icon}</span>
            </div>
            </Link>
    )
}