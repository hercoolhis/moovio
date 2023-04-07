import { useEffect, useState } from "react";

import imdb from "../api/imdb";


export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('')

    const searchApi = async (searchTerm) => {

        try {
            const response = await imdb.get('/title/v2/find', {
                params: {
                    limit: '50',
                    title: searchTerm.toLowerCase()
                }
            });
    
            setResults(response.data.results)
        } catch (error) {
            setError('An Error Occured')
        }
    }

    useEffect(() => {
        searchApi('vikings')
    }, [])

    return [searchApi, results, error];
}
