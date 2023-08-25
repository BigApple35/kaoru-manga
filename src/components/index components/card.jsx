import Link from "next/link"
import GenreButton from "./genre"

export default function Card({cover, title, info, slug}) {
    return(
        <div>
            <Link href={`/manga/${slug}`} className="w-[100%] h-64 rounded-xl flex flex-col relative select-none">
                <div className="w-[100%] h-[80%] duration-200 delay-100"><img src={cover} className="object-cover w-full h-full rounded" alt="" /></div>

                <div className="h-auto flex flex-col ">
                    <h3 className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
                    <div className="text-xs">
                        {info}
                    </div>
                </div>
            </Link>
        </div>
    )
}