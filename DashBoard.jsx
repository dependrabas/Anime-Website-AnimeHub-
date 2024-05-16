import { useEffect } from "react";
import "../css/DashBoard.css";
import { useDispatch } from "react-redux";
import { animeActions } from "../store/index";

const DashBoard = () => {

    const dispatch = useDispatch();

    const removeC = (e) => {
        e.target.classList.toggle("active");
        var div = e.target.nextElementSibling;
        if (div.style.maxHeight) {
            div.style.maxHeight = null;
        } else {
            div.style.maxHeight = div.scrollHeight + "px";
        }
    }

    const toggleClass = (e, filter) => {
        const list = document.getElementsByClassName("category");

        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains("activeTab")) {
                list[i].classList.remove("activeTab");
                break;
            }
        }

        e.target.classList.add("activeTab");

        dispatch(animeActions.setSearchQuery(""));
        dispatch(animeActions.setFilter(filter));

    }

    useEffect(() => {
        const acc = document.getElementsByClassName("accordion");

        for (let i = 0; i < acc.length; i++) {
            if (acc[i].classList.contains("active")) {
                acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + "px";
            }
        }
    }, [])

    return (
        <div className="flex flex-col gap-2 px-2 shadow-lg h-full">
            <div className="flex flex-col gap-2">
                <button onClick={(e) => removeC(e)} className="active font-bold accordion text-white text-left text-lg w-full tracking-wider">Animes</button>
                <ul className="pl-1 panel flex flex-col gap-3">
                    <li onClick={(e) => toggleClass(e, "upcoming")} className="category pl-2 duration-200 ease-in activeTab tracking-wider rounded-sm py-1 cursor-pointer text-white hover:bg-[white] hover:text-black mr-2">Upcoming</li>
                    <li onClick={(e) => toggleClass(e, "airing")} className="category pl-2 duration-200 ease-in tracking-wider rounded-sm py-1 cursor-pointer text-white hover:bg-[white] hover:text-black mr-2">Top-Airing</li>
                    <li onClick={(e) => toggleClass(e, "popular")} className="category pl-2 duration-200 ease-in tracking-wider rounded-sm py-1 cursor-pointer text-white hover:bg-[white] hover:text-black mr-2">Popular</li>
                    <li onClick={(e) => toggleClass(e, "favorite")} className="category pl-2 duration-200 ease-in tracking-wider rounded-sm py-1 cursor-pointer text-white hover:bg-[white] hover:text-black mr-2">Favorites</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={(e) => removeC(e)} className="font-bold accordion text-white text-left text-lg w-full tracking-wider">Characters</button>
                <ul className="panel flex flex-col gap-2">
                    <li className="pl-2 text-white cursor-pointer py-1">Coming Soon!!</li>
                </ul>
            </div>
        </div>
    )
}

export default DashBoard