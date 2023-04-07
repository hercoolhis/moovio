import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import ResultsDetails from "./ResultsDetails";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginLeft: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },

    container: {
       marginBottom: 10 
    }
})
function ResultsList({ title, data, navigation }) {
    

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data} 
                    keyExtractor={(each) => each.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('ResultsShowScreen', { id: item.id })
                            }}>
                                 <ResultsDetails result={item} />
                            </TouchableOpacity>
                           
                        )
                    }} 
                />
            </View>
        </>
    )
}

export default withNavigation(ResultsList)
