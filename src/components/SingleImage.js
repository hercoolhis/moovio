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
        marginHorizontal: 15,
        marginVertical: 10   
    }
})

const truncate = (str) => {
    return str.length > 1000 ? str.substring(0, 70) + "..." : str;
}
export default function SingleImage({ image }) {
    
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: image?.url }} />
                <Text style={styles.name}>{truncate(image.caption)}</Text>
            </View>
        </>
    )
}

