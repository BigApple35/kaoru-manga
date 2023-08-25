"use client"

import GenreButton from "./genre"

export default function Slider(props) {
    return(
        <div className={`w-[100%] h-full items-center flex ${props.class} relative select-none`}>
                <div className="h-full min-w-[20%] xs:min-w-[30%] bg-discord-gray-100 flex "> <img src={props.cover} alt="" className="w-full object-cover"/></div>
                <div className=" ml-4 h-full flex flex-col xs:w-full pt-6">
                    <h1 className="text-3xl font-bold pb-2 xs:text-2xl">{props.title}</h1>
                    <div className="flex gap-2 flex-wrap">
                        {props.genre.map((val, i) =>{
                            return <GenreButton genre={val}/>
                        })}
                    </div>
                    <p className="font-light w-full xs:w-11/12 h-[50%] text-sm mt-6 relative overflow-auto xs:overflow-hidden scrollbar-none xs:text-xs">synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
                    synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
                    synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
                    Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
                    synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
                    synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
</p>
                </div>
            </div>
    )
}