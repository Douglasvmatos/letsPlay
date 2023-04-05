import { TextInput, TextInputProps, StyleSheet} from 'react-native'

export function SmallInput({...rest}: TextInputProps) {
    return (
       <TextInput 
       style={styles.container}
       {...rest}
       keyboardType="numeric"
       />
    )
}

const styles = StyleSheet.create({
    container: {
      width: 52,
      height: 46,
      borderRadius: 10,
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 4,
      textAlign: 'center',
      borderWidth: 1,
      backgroundColor: '#D1CFBF',
    }
  });