import {GrFormClose} from "react-icons/gr"

export default function GenreBubble({Genre}) {
    return(
        <div className="flex gap-1 justify-between items-center rounded-md text-sm px-1 bg-white">
            <span>{Genre}</span>
            <div className="hover:bg-gray-200 duration-100">
                <GrFormClose size={20}/>
            </div>
        </div>
    )
}