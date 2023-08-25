

import { useSwiper } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function SwiperButton(props){
    const swiper = useSwiper()

    return(
        <div className="absolute bottom-4 grid grid-cols-2 gap-4 right-10  z-10">
            <button  onClick={() => {{swiper.slidePrev()}}} className="p-1 rounded-lg hover:bg-light-prim-200 border-2 border-[#000000] duration-150">{<MdNavigateBefore color="black" size={40}/>}  </button>

            <button  onClick={() => {{swiper.slideNext()}}} className="p-1 border-2 border-[#000000] rounded-lg hover:bg-light-prim-200 duration-150">{<MdNavigateNext color="black" size={40}/>}  </button>
        </div>
    )
}