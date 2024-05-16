import { useNavigate } from "react-router-dom"
import Animes from "./Animes"
import DashBoard from "./DashBoard"

const ContentDiv = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-16 flex items-stretch">
            <aside className="hidden pl-2 py-4 w-[20%] md:block">
                <DashBoard />
            </aside>
            <main className="flex-1 py-4">
                <Animes />
            </main>
            <div className="fixed bottom-2 right-2 flex gap-2">
                <button onClick={() => navigate('/top10')} className="fa fa-comments-o bg-[yellow] rounded-full p-3" title="Top 10 Animes"></button>
                <button onClick={() => navigate('/animeHistory')} className="fa fa-history bg-[yellow] rounded-full p-3" title="Anime History"></button>
            </div>
        </div>
    )
}

export default ContentDiv