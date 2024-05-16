
const EpisodeButton = ({ data, ep }) => {
    return (
        <div className="rounded-sm py-2 flex flex-col gap-2 items-center rounded-sm bg-white">
            <p className="font-bold tracking-wider">Episode {ep + 1}</p>
            <p className="font-bold tracking-wider">{data.title.slice(0, 40).trim()}{data.title.length > 40 && "..."}</p>
            {data.url ? <a target="__blank" href={data.url} className="bg-[yellow] rounded-sm text-black px-2 py-1 cursor-pointer">Watch now</a> : <p className="bg-[red] rounded-sm text-white px-2 py-1 cursor-pointer">Episode Not available</p>}
        </div>
    )
}

export default EpisodeButton