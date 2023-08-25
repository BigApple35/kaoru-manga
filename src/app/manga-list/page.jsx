
import Bar from "@/components/index components/bar";
import TableSearch from "@/components/search components/table";
import axios from "axios";
import Dropdown from "@/components/mangalist components/Dropdown";
import GenreDrop from "@/components/mangalist components/GenreDrop";

export default function MangaList(){
    return(
        <div>
            <Bar/>
            <div className="w-full px-[10%] flex justify-center flex-col">
                <h1 className="text-2xl font-semibold">Manga List</h1>
                <form action="" className="w-full h-32 grid grid-cols-5 gap-2 mt-10 relative">

                    <Dropdown Title={"Genre"} Content={<GenreDrop/>}/>
                    <Dropdown Title={"Sort By"}/>
                    <div className="h-5">
                        
                    </div>
                </form>
            </div>
        </div>
    )
} 

