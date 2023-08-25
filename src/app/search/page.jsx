


import Bar from "@/components/index components/bar"
import Comps from "@/components/search components/main"

export default function Page(){

    return(
        <div className="flex justify-center w-full">
            <Bar/>
            <div className="w-[90%] mt-20">
                <h1 className="mb-4 text-3xl">Search</h1>
                <form action="">
                    <input name="title" type="text" className="border rounded-full h-10 pl-4 border-black w-[100%]" />
                </form>
                <Comps/>
            </div>
        </div>
    )
}