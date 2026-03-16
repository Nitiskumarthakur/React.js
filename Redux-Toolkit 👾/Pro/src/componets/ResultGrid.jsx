import { useEffect, useState, useTransition } from "react"
import { fetchPhotos, fetchGif, fetchVideo } from "../api/mediaApi"
import { setQuery, setResults, setLoading, setError, setActiveTabs, clearResults } from "../features/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import ResultCard from "./ResultCard"


export default function ResultGrid() {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const [isPending, startTransition] = useTransition();

    const dispatch = useDispatch();

    useEffect(() => {

        try {
            dispatch(setLoading());
            const getData = async () => {
                
                if(!query)  return
                console.log("Nitish")
                let data = [];
                if (activeTab == 'Photo') {
                    let responce = await fetchPhotos(query);
                    data = responce.results.map((item) => ({
                        id: item.id,
                        type: 'Photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html,
                    }))
                }
                if (activeTab == 'Video') {
                    let responce = await fetchVideo(query);
                    data = responce.videos.map((item) => ({
                        id: 'item.id',
                        type: 'Video',
                        title: item.user.name || 'cat',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url,
                    }))

                }
                if (activeTab == 'Gifs') {
                    let responce = await fetchGif(query);
                //    const  re = responce.data
                //    console.log(re);
                    data = responce.data.map((item) => ({
                        id: item.slug,
                        type:'Gifs',
                        title: item.title,
                        thumbnail: item.usernames,
                        src: item.images.original.url,
                        url:item.url   
                    }))
                }
                dispatch(setResults(data));

            };
            if (query.length > 0) {
            getData();
        }

        } catch (error) {
            dispatch(setError(error));
        }
    }, [query, activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading..........</h1>

    return (
        <div className="flex justify-start flex-wrap gap-5 overflow-auto px-10   pl-42 mt-5 mr-20">
            {results.map((item, idx)=>{
                return  <div key={idx}>
                   <ResultCard  item={item}/>
                </div>
            })}
        </div>
    )
}