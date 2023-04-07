import axios from "axios";


export default axios.create({
    baseURL: 'https://imdb8.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'cff6794376mshec59581f23348fap1af5acjsnb031fdb87165',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
})