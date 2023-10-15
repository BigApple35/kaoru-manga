
import Bar from "@/components/index components/bar";
import TableSearch from "@/components/search components/table";
import axios from "axios";
import Dropdown from "@/components/mangalist components/Dropdown";


const GetGenre = async () => {
    const data = await axios.get('http://127.0.0.1:4000/kr/genre')
    return data.data
}

export default async function  MangaList(){
    const genre =  await GetGenre()

    return(
        <div>
            <Bar/>
            <div className="w-full px-[10%] flex justify-center flex-col">
                <h1 className="text-2xl font-semibold">Manga List</h1>
                <form action="" className="w-full h-32 gap-x-2 mt-10 relative">
                    <Dropdown Color={"bg-gray-200"} Height={60} genreList={genre}/>
                </form>

                sasdsa
            </div>
        </div>
    )
} 

