import React from 'react';
import { Image, StyleSheet } from 'react-native';

export function GuildIcon() {   
    const uri = "https://cdn-icons-png.flaticon.com/512/188/188899.png"
  return (
    <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
    />
  )
}

const styles = StyleSheet.create({
   image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 20
    }
})