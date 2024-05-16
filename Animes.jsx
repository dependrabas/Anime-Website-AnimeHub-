import axios from "axios"
import { useEffect, useState } from "react"
import Anime from "./Anime"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector } from "react-redux"
import loader from "./loader.png";
import notFound from "./notFound.png"
import { Router, Route } from "react-router-dom";

const Animes = () => {

  const [data, setData] = useState();
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const filter = useSelector(state => state.anime.filter);
  const searchQuery = useSelector(state => state.anime.searchQuery);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setLoading(true);
      setPage(1);
      axios.get(`https://api.jikan.moe/v4/top/anime`, {
        params: {
          filter: filter,
          page: page,
          limit: 12
        }
      })
        .then(response => {
          setData(response.data.data);
          setTotal(response.data.pagination.last_visible_page);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setData(null);
          setLoading(false);
        });
    }
  }, [filter])

  useEffect(() => {
    if (searchQuery.length !== 0) {
      setPage(1)
      axios("https://api.jikan.moe/v4/anime", {
        params: {
          q: searchQuery,
          page: page,
          limit: 12
        }
      }).then(response => setData(response.data.data))
        .catch(error => console.log(error))
    }
  }, [searchQuery])

  useEffect(() => {
    if (page !== 1) {
      axios("https://api.jikan.moe/v4/top/anime", {
        params: {
          filter: filter,
          page: page,
          limit: 12
        }
      }).then(response => setData(data.concat(response.data.data)))
        .catch(error => setPage(page + 1))
    }
  }, [page])


  return (
    loading === true ? <div className="py-4 flex flex-col items-center gap-4 justify-center">
      <img src={loader} className="w-[15%]" />
      <p className="text-2xl text-[yellow]">Loading ...</p>
    </div> :
      data && data.length !== 0 ?

        <InfiniteScroll
          dataLength={data.length}
          next={() => setPage(prev => prev + 1)}
          hasMore={page === total ? false : true}
          loader={<p className="px-4 py-2 text-[yellow]">Loading...</p>}
          err
        >
          <div className="grid gap-4 px-4 md:grid-cols-3">
            {data.map(item => <Anime filter={filter} anime={item} key={item.mal_id} />)}
          </div>
        </InfiniteScroll>

        : <div className="flex flex-col items-center justify-center ">
          <img className="w-[20%]" src={notFound} />
          <p className="text-[yellow] text-lg tracking-wider">
            No Results Found for "{searchQuery}"
          </p>
        </div>
  )
}

export default Animes