import { Text, Center, Icon } from 'native-base';
import { Image, StyleSheet } from 'react-native'
import { Fontisto, AntDesign } from '@expo/vector-icons'

import { Button } from '../components/Button';

export function SignIn() {
    return (
        <Center flex={1} bg="black" p={7}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Button  
            title='Entrar com o google'
            leftIcon={<Icon as={Fontisto} name='google' color="white" size="md" />}
            mt={8}
            _loading={{ _spinner: {color: 'white'} }}
            />
            <Button  
            title='Cadastrar novo usuário com e-mail'
            leftIcon={<Icon as={AntDesign} name='plus' color="black" size="md" />}
            mt={6}
            color="black"
            _loading={{ _spinner: {color: 'white'} }}
            // onPress={() => navigate('signUp')}
            />
            
            <Text color="white" textAlign="center" mt={4}>
                Utilizamos suas informações do seu e-mail {'\n'}  para criação de sua conta.
            </Text>
        </Center>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 350,
        height: 250
    }
})