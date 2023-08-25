export default function GenreButton(props){
    return(
        <div className={`w-auto h-auto p-1  rounded font-semibold text-black text-xs xs:text-[10px] xs:p-[3px] bg-white ${props.class}`}>
            <h5>{props.genre}</h5>
        </div>
    )
}