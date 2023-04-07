import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    name: {
       
        fontWeight: 'bold'
    },

    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    container: {
        marginLeft: 15   
    }
})

const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 30) + "..." : str;
}
export default function ResultsDetail({ result }) {
    

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: result?.image?.url }} />
                <Text style={styles.name}>{truncate(result.title)}</Text>
                <Text>{result.year}</Text>
            </View>
        </>
    )
}


//[{"id": "/title/tt2306299/", "image": {"height": 900, "id": "/title/tt2306299/images/rm3031749377", "url": "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", "width": 600}, "title": "Vikings", "titleType": "tvSeries", "year": 2013}, {"id": "/title/tt11311302/", "image": {"height": 1200, "id": "/title/tt11311302/images/rm653409793", "url": "https://m.media-amazon.com/images/M/MV5BMmZlYTQ3NjQtZmIxNC00MzA4LTg1NDgtMmEzODk0MzA4NjQxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", "width": 810}, "title": "Vikings: Valhalla", "titleType": "tvSeries", "year": 2022}
