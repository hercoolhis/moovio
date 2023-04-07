import { useEffect, useState } from "react";

import imdb from "../api/imdb";


export default (id) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('')

    const getSingleTitle = async (id) => {
        const specificId = id.split("/")[2];

        try {
            const response = await imdb.get('/title/get-images', {
                params: {
                    limit: '10',
                    tconst: specificId
                }
            });

            const imageCaptionAndURl = response.data.images.map(each => {
                return {
                    url: each.url,
                    caption: each.caption
                }
            })
    
            setResults(imageCaptionAndURl)
        } catch (error) {
            setError('An Error Occured')
        }
    }

    useEffect(() => {
        getSingleTitle(id)
    }, [])


    return [results, error];
}
