import { StyleSheet, View } from "react-native"


export function ListDivider() {
    return (
        <View  style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: '#d3d3d3',
        marginVertical: 21,
        alignSelf: 'center',
    }
})