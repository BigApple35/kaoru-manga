import Link from "next/link"

export default function Table({title, chapter, date, cover, slug}){
    return(
        <div className="border shadow flex pr-4 rounded-md gap-2">
            <img src={cover} className="object-cover h-36 xs:h-20 w-[30%] xs:w-[15%]" alt="" />
            <div className="w-[70%] h-full flex-col flex py-2">

                <Link href={`/manga/${slug}`} className="w-full  font-bold md:text-sm whitespace-nowrap text-ellipsis overflow-hidden hover:underline">{title}</Link>
                <ul className="w-full mt-2 xs:[&>*:nth-child(n+3)]:hidden">
                    {chapter.map((val, i) =>{
                            return(
                                    <div className="hover:text-light-prim-500 font-semibold">
                                        <Link href={`/manga/${slug}/${val.slug}`}>
                                            <li className="flex justify-between">
                                                <p className="text-xs  hover:underline">{`Chapter ${val.chapter}`}</p>
                                                <p className="text-xs text-prim-gray-200">
                                                    {`${val.time}`}
                                                </p> 
                                            </li>
                                        </Link>
                                    </div>
                                )
                        })}

                     
                </ul>
            </div>
        </div>
    )
}