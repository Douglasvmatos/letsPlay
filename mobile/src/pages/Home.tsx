import { Text, Center, Icon, View, Divider, FlatList } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'

import { Button } from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { Profile } from '../components/Profile';
import { Appointment } from '../components/Appointment';
import { ListDivider } from '../components/ListDivider';

import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';

import { useNavigation } from "@react-navigation/native";

export function Home() {

    const { navigate } = useNavigation()

    const appoiment = [
        {
        id: '1',
        owner: true,
        availableVacancies: 4,
        date: '21/03/22 ás 17:19h',
        CEP: '28896225',
        address: 'Rua Avencas',
        neighborhood: 'Chácara Mariléa',
        city: 'Rio das Ostras',
        UF: 'RJ',
        addressNumber: '36',
        description: 'Futebol society com 6 linhas e 1 no gol',
        category: 'Futebol Society'
        },
        {
        id: '2',
        owner: true,
        availableVacancies: 4,
        date: '21/03/22 ás 17:19h',
        CEP: '28896225',
        address: 'Rua Avencas',
        neighborhood: 'Chácara Mariléa',
        city: 'Rio das Ostras',
        UF: 'RJ',
        addressNumber: '36',
        description: 'Futebol society com 6 linhas e 1 no gol',
        category: 'Futebol Society'
        }
    ]

    return (
        <LinearGradient
        colors={[ '#3F5999','#3b5545', '#808080']}
        style={{flex: 1}}
        >
        <Header title='Página Inicial' showBackButton showShareButton />
        <View flexDirection='row'  justifyContent='space-around' alignItems='flex-end'>
            <Profile /> 
            <Button width={50} justifyContent='center' alignItems='center'
            leftIcon={<Icon as={FontAwesome} name='plus' color="black" size="md" />}  bg='blue.400' _pressed={{bg: 'blue.600'}}
            onPress={() => navigate('newGame')}
            />
        </View>

    <Divider _light={{h: 1.5, marginTop: 5, bg: "muted.800"   }} />
        <Center >
            <View 
            flexDirection='row'
            mt={2}
            justifyContent='space-around'
            width='100%' 
            alignItems='baseline' 
            marginBottom={2}>
                <Text color='white' fontWeight='bold' fontSize={20} >Partidas agendadas</Text>
                <Text color='gray.800' fontWeight='bold' fontSize={16}>Total 6</Text>
            </View>
           <FlatList
            data={appoiment}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Appointment data={item}/>
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
           />
        </Center>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    matches: {
        marginHorizontal: 10,

    }
})