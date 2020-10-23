import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                To-Do Demo
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})