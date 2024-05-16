import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import EpisodeButton from "./EpisodeButton";

const AnimeDetail = () => {

    let ep = 1;
    const { id } = useParams();
    const [data, setData] = useState();
    const [episodes, setEpisodes] = useState();
    useEffect(() => {
        axios(`https://api.jikan.moe/v4/anime/${id}/full`)
            .then(response => setData(response.data.data))
            .catch(error => console.log(error));
        axios(`https://api.jikan.moe/v4/anime/${id}/episodes`)
            .then(response => setEpisodes(response.data.data))
    }, []);

    return (
        <div className="p-4 mt-16">
            {data && <div className="flex flex-col justify-center h-full items-stretch gap-3 md:flex-row">
                <div className="w-full md:w-[25%]">
                    <img className="w-full h-full" src={data.images.jpg.large_image_url} />
                </div>
                <div className="flex-1 flex flex-col items-start gap-4">
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                {data.title_english ? <p className="text-xl text-[yellow]  font-bold">{data.title_english}</p> : <p className="text-xl text-[yellow]  font-bold">{data.title}</p>}
                                {data.rating && <p className="hidden md:block font-bold text-[yellow] text-xl">({data.rating})</p>}
                            </div>
                            {data.airing === true && <p className="text-white tracking-wider bg-[seagreen] rounded-full px-4 text-sm"><i className="fa fa-circle mr-1"></i>Airing</p>}
                        </div>
                        {data.title_japanese && <p className="text-lg text-[yellow]  font-light">{data.title_japanese}</p>}
                        <div className="flex gap-2 mt-2 items-center">
                            {data.genres.map(item => <p key={item.mal_id} className="bg-[yellow] rounded-full px-4 font-bold text-[0.7em]">{item.name}</p>)
                            }
                        </div>
                    </div>
                    <div>
                        {data.year && <p className="font-light tracking-[2px] text-white text-lg">Released In: {data.year}</p>}
                        {data.status && <p className="font-light tracking-[2px] text-white text-lg">Status: {data.status}</p>}
                        {data.episodes > 1 && <p className="font-light tracking-[2px] text-white text-lg">Total episodes: {data.episodes}</p>}
                        {data.duration && <p className="font-light tracking-[2px] text-white text-lg">Duration: {data.duration}</p>}

                    </div>

                    {data.synopsis && <div>
                        <p className="text-[yellow] tracking-wider">Synopsis</p>
                        <p className="mt-1 text-justify text-white tracking-wider">{data.synopsis}</p>
                    </div>}
                </div>
            </div>}
            {episodes && episodes.length > 0 && <div className="mt-4">
                <p className="text-[yellow] tracking-wider text-xl">Episodes</p>
                <div className="grid gap-4 mt-2 md:grid-cols-3">
                    {episodes.map((item, index) => <EpisodeButton ep={index} data={item} />)}
                </div>
            </div>}
        </div>
    )
}

export default AnimeDetail