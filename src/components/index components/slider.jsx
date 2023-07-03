export default function Slider(props) {
    return(
        <div className={`w-[100%] h-full items-center hidden ${props.class}`}>
                <div className="h-full min-w-[224px] bg-discord-gray-100"></div>
                <div className="text-white ml-4 h-full flex flex-col">
                    <h1 className="text-3xl font-bold">Title {props.a}</h1>
                    <p className="font-light text-sm mt-6">synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, mauris eu dignissim posuere, risus nibh tempus arcu, a molestie massa sem tristique diam. Suspendisse sit amet rhoncus diam. Curabitur placerat euismod est, ut pulvinar magna lacinia at. Vestibulum pharetra justo tellus. Vivamus eleifend vestibulum turpis, nec feugiat elit vulputate ut. Donec vitae enim pulvinar, fermentum mi nec, dapibus magna. Integer in aliquet dolor. Quisque eleifend eget est non tincidunt.
</p>
                </div>
            </div>
    )
}