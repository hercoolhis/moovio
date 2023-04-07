import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

import useSingleResultImages from "../hook/useSingleResultImages";
import SingleImage from "../components/SingleImage";

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

export default function ResultsShowScreen({ navigation }) {

    const id = navigation.getParam('id');
    const [images, error] = useSingleResultImages(id)

    return (
        <>
            <View style={styles.container}>
                {error && <Text>Error fetching images</Text>}
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={images} 
                    keyExtractor={(each) => each.url}
                    renderItem={({ item }) => {
                        return (
                            <SingleImage image={item} />
                        )
                    }} 
                />
            </View>
        </>
    )
}

