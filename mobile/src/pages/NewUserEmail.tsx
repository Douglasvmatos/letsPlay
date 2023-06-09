import { Text, ScrollView, VStack, Center } from 'native-base';
import { Image, StyleSheet} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('Email inválido'),
    password: yup.string().required('Informe o password').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    passwordConfirm: yup
    .string()
    .required('Informe a confirmação de senha')
    .oneOf([yup.ref('password'), ], 'A senha não conferem digitada acima.')
})

export function NewUserEmail() {

    const {navigate} = useNavigation()

    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
        resolver : yupResolver(signUpSchema)
    });

    function handleGames(){
        navigate('home')
    }

    function handleSignUp(data: FormDataProps) {
        console.log(data)
        handleGames()
    }

    
    
    return (
            <LinearGradient
             colors={[ '#3F5999','#3b5545', '#808080']}
             style={{flex: 1}}
            >
            <Header title="CRIA SUA CONTA" showBackButton />
            <ScrollView p={7}>
            <VStack>
                <Controller
                    control={control}
                    name="name"
                    render={({ 
                        field: {onChange}}) => (
                            <Input 
                            placeholder='Nome' 
                            errorMessage={errors.name?.message}
                            onChangeText={onChange}/>
                            
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({ 
                        field: {onChange}}) => (
                            <Input 
                            placeholder='E-mail' 
                            onChangeText={onChange}
                            errorMessage={errors.email?.message}
                            />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ 
                        field: {onChange}}) => (
                            <Input 
                            placeholder='Senha' 
                            secureTextEntry 
                            onChangeText={onChange}
                            errorMessage={errors.password?.message}
                            />
                    )}
                />
                <Controller
                    control={control}
                    name="passwordConfirm"
                    render={({ 
                        field: {onChange}}) => (
                            <Input 
                            placeholder='Confirme a senha'
                            secureTextEntry
                            onChangeText={onChange}
                            errorMessage={errors.passwordConfirm?.message}/>
                    )}
                />
                </VStack>
                <Button 
                title='CADASTRAR' 
                bg='green.500' 
                _pressed={{bgColor: "green.700"}} 
                onPress={handleGames
                    // handleSubmit(handleSignUp)
                    }/>

                <Image
                source={require('../assets/logo.png')}
                style={{ width: 250,height: 250, marginBottom: 100, alignSelf: 'center'}}
                />
            </ScrollView>
            </LinearGradient>
    )
}
