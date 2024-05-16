import { useNavigate } from "react-router-dom";
import "../css/Anime.css";


const Anime = ({ anime, filter }) => {
    const navigate = useNavigate();

    const navigateAnimeDetail = (id) => {
        navigate(`/${id}`);
    }

    return (
        <div className="singleAnimeDiv w-full h-full min-h-[450px] relative overflow-hidden">
            <img className="animeImg w-full h-full object-fill" src={anime.images.jpg.large_image_url} />
            <div className="overlay bg-black opacity-0 w-full h-full absolute top-0 left-0"></div>
            <div className="animeInfo cursor-pointer w-full h-full flex items-end absolute top-0 left-0 opacity-0" onClick={() => navigateAnimeDetail(anime.mal_id)}>
                <div className={filter !== "upcoming" ? "bg-black w-full p-2 flex justify-between items-center" : "bg-black w-full p-2 flex justify-center"}>
                    <p className={filter !== "upcoming" ? "text-white tracking-wider font-bold text-sm" : "text-white tracking-wider text-center font-bold text-sm"}>
                        {
                            anime.titles[anime.titles.length - 1].type === "English" ? filter === "upcoming" ? anime.titles[anime.titles.length - 1].title : anime.titles[anime.titles.length - 1].title.length > 26 ? anime.titles[anime.titles.length - 1].title.slice(0, 26).trim() + "..." : anime.titles[anime.titles.length - 1].title : filter === "upcoming" ? anime.title : anime.title.length > 26 ? anime.title.slice(0, 26) : anime.title
                        }
                    </p>
                    {filter !== "upcoming" && anime.score !== null && <div className="flex items-center bg-[#1f1f1f] rounded-[2px] gap-2 p-1 px-2">
                        <span className="fa fa-star checked text-[yellow]"></span>
                        <p className="text-white text-sm">{anime.score}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Anime