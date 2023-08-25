export default function Poster(){
    return(
        <a className="w-full h-auto flex flex-shrink text-white">
            <div className="w-full h-full">
                <div className="w-full flex ">
                    <img className="w-[100%] object-cover drop-shadow-sm hover:shadow-inner rounded-md" src="https://thumbnail.komiku.id/wp-content/uploads/2018/08/Manhua-Martial-Peak.jpg?resize=210,270" alt="" />
                </div>
                <div className="text-black p-[2px] mt-1 mb4">
                    <p className="font-bold">Title</p>
                </div>
            </div>
        </a>
    )
}