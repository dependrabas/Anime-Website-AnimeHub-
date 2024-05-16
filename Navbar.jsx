import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { animeActions } from "../store/index";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [toggler, setToggler] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        if (toggler) {
            document.getElementById("hamburger").style.marginLeft = "0";
        } else {
            document.getElementById("hamburger").style.marginLeft = "-100%";
        }

        if (toggler) {
            document.body.style = "overflow: hidden";
        } else {
            document.body.style = "overflow: auto";
        }
    }, [toggler])

    let arr = document.getElementsByClassName("category");
    const showMenu = (value) => {
        for (let i = 0; i < arr.length; i++) {
            if (i === value) {
                if (arr[i].style.height == "") {
                    arr[i].style.height = "auto";
                } else {
                    arr[i].style.height = "";
                }
            } else {
                arr[i].style.height = "";
            }
        }
    }

    const setFilter = (e, filter, value) => {
        let navTabs = document.getElementsByClassName("navTabs");

        for (let i = 0; i < navTabs.length; i++) {
            if (value !== i) {
                if (navTabs[i].classList.contains("activeNavTab")) {
                    navTabs[i].classList.toggle("activeNavTab")
                    break;
                }
            }
        }
        e.target.classList.toggle("activeNavTab");
        dispatch(animeActions.setSearchQuery(""));
        dispatch(animeActions.setFilter(filter));
        setToggler(!toggler);
    }

    const showSearchNav = (value) => {
        if (value) {
            document.getElementById("mainNav").style.display = "none";
            document.getElementById("searchNav").style = "display: block";
        } else {
            document.getElementById("mainNav").style = "display: flex";
            document.getElementById("searchNav").style.display = "none";
        }
    }

    const setStoreSearchQuery = () => {
        if (searchQuery.length !== 0) {
            dispatch(animeActions.setSearchQuery(searchQuery));
            dispatch(animeActions.setFilter(""));
            window.scrollTo(0, 0);
        }
    }

    return (
        <>
            <div id="hamburger" className="z-40 ml-[-100%] bg-black w-full h-full fixed left-0 flex flex-col md:hidden select-none">
                <div className="overflow-hidden select-none">
                    <div onClick={() => showMenu(0)} className="bg-[#1f1f1f] p-4 flex items-center cursor-pointer">
                        <p className="font-bold text-white text-left text-lg w-full tracking-wider ">Animes</p>
                        <span className="fa fa-chevron-down text-white"></span>
                    </div>
                    <div className="category bg-[#1f1f1f] h-[0px] flex overflow-hidden px-4 hover:cursor-pointer select-none">
                        <ul className="select-none flex w-full flex-col gap-4 pb-4">
                            <li onClick={(e) => setFilter(e, "upcoming", 0)} className="py-1 px-4 navTabs text-white font-light tracking-wider hover:bg-white hover:text-black w-full activeNavTab">Upcoming</li>
                            <li onClick={(e) => setFilter(e, "airing", 1)} className="py-1 px-4 navTabs text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Top-Airing</li>
                            <li onClick={(e) => setFilter(e, "popular", 2)} className="py-1 px-4 navTabs text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Popular</li>
                            <li onClick={(e) => setFilter(e, "favorite", 3)} className="py-1 px-4 navTabs text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Favorites</li>
                        </ul>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div onClick={() => showMenu(1)} className="bg-[#1f1f1f] p-4 flex items-center cursor-pointer">
                        <p className="font-bold text-white text-left text-lg w-full tracking-wider ">Characters</p>
                        <span className="fa fa-chevron-down text-white"></span>
                    </div>
                    <div className="category bg-[#1f1f1f] h-[0px] flex overflow-hidden px-4 hover:cursor-pointer select-none">
                        <ul className="select-none flex w-full flex-col gap-4 pb-4">
                            <li className="py-1 px-4 text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Upcoming</li>
                            <li className="py-1 px-4 text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Top-Airing</li>
                            <li className="py-1 px-4 text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Popular</li>
                            <li className="py-1 px-4 text-white font-light tracking-wider hover:bg-white hover:text-black w-full">Favorites</li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="z-40 fixed top-0 left-0 w-full bg-[#1f1f1f]  shadow-xl md:hidden">
                <div id="mainNav" className="flex p-4 items-center justify-between">
                    <h1 className="title select-none text-white font-bold text-2xl">AnimeHub</h1>
                    <div className="flex items-center gap-4">
                        <button onClick={() => showSearchNav(true)} className="fa fa-search text-lg text-[yellow]"></button>
                        <button onClick={() => setToggler(!toggler)} className="fa fa-bars text-white text-lg focus:outline-none"></button>
                    </div>
                </div>
                <div id="searchNav" className="hidden p-4">
                    <div className="flex border-b-[1px] border-[#ccc] w-full pb-1 gap-4">
                        <button onClick={() => showSearchNav(false)} className="fa fa-arrow-left text-lg text-white"></button>
                        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="bg-[transparent] flex-1 focus:outline-none text-white" placeholder="Search Anime" />
                        <button onClick={setStoreSearchQuery} className="fa fa-search text-lg text-[yellow]"></button>
                    </div>
                </div>
            </nav>
            <nav className="hidden bg-[#1f1f1f] fixed top-0 left-0 items-stretch justify-between w-full p-4 shadow-xl md:flex">
                <h1 onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                }} className="cursor-pointer title select-none text-white font-bold text-2xl">AnimeHub</h1>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-4 py-[2px] rounded-sm items-center bg-white px-2">
                        <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search Anime" type="text" className="bg-[transparent] focus:outline-none font-light" onKeyUp={(e) => {
                            if (searchQuery.length !== 0) {
                                e.code === "Enter" && navigate("/");
                                e.code === "Enter" && dispatch(animeActions.setSearchQuery(searchQuery));
                                e.code === "Enter" && dispatch(animeActions.setFilter(""));
                                e.code === "Enter" && window.scrollTo(0, 0);
                            }
                        }} />
                        <button onClick={setStoreSearchQuery} className="fa fa-search text-lg text-black"></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar