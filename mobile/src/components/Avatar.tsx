import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

type Props = {
    urlImage: string
}

export function Avatar({urlImage}: Props) {
    return (
        <View>
           <Image 
           source={{uri: urlImage}}
           style={styles.avatar}
           />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 49,
        height: 49,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 22
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 8
    }
})