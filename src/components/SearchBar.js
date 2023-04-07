import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        margin: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default function SearchBar({ term, onTermChange, onTermSubmit }) {

   

    return (
        <>
            <View style={styles.backgroundStyle}>
                <Feather style={styles.iconStyle} name='search' size={30}/>
                <TextInput 
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder='Search'
                    value={term}
                    onChangeText={newTerm => onTermChange(newTerm)}
                    onEndEditing={() => { onTermSubmit() }}
                />
               
            </View>
            
        </>
    )
}
