import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from "@constants";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 3000);
    }, [])

    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center",
            // backgroundColor: COLORS.blackLight
        }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.blue }}>xkcd comics</Text>
        </View>
    )
}

export default SplashScreen