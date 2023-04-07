import React, { useState } from 'react';
import { View, Text, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useSearchResults from '../hook/useSearchResults';
import ResultsList from "../components/ResultsList";


export default function SearchScreen() {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useSearchResults();

    const filterResultsByGenre = (genre) => {
        return results?.filter((each) => each.titleType === genre && each.image)
    }
   

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => { setTerm(newTerm) }}
                onTermSubmit={() => {
                    searchApi(term)
                }}
            />
            { error && <Text>{error}</Text>}  
            <ScrollView>
                <ResultsList data={filterResultsByGenre('tvSeries')} title='TV Series'/>
                <ResultsList data={filterResultsByGenre('movie')} title='Movie'/>
                <ResultsList data={filterResultsByGenre('tvMiniSeries')} title='Mini Series'/>
            </ScrollView>
        </>
    )
}



