import axios from "axios";

const UPSLASH_KEY = import.meta.env.VITE_UPSLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENSOR_KEY = import.meta.env.VITE_TESOR_KEY;
 

export const fetchPhotos = async (query, page=1, par_page=20)=>{
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query, page, par_page},
        headers:{Authorization:`Client-ID ${UPSLASH_KEY}`}
    })
    return res.data
}


export const fetchVideo = async (query, par_page=20)=>{
    const res = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,par_page},
        headers:{Authorization:PEXELS_KEY}
    })
    return res.data
    
}

//https://api.giphy.com/v1/gifs/search?q=cats&api_key=YOUR_API_KEY&limit=10
export const fetchGif = async (query, par_page=20)=>{
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${TENSOR_KEY}&limit=33`)
    return res.data
    
}






