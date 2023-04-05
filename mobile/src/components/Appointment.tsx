import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, StyleSheet, Text } from 'react-native'

import { GuildIcon } from './GuildIcon'
import { space } from 'native-base/lib/typescript/theme/styled-system'

export type GuildProps = {
    owner: boolean
}

export type AppointmentProps = {
    id: string;
    availableVacancies: number;
    date: string;
    CEP: string;
    address: string;
    neighborhood: string;
    city: string;
    UF: string;
    addressNumber: string;
    description: string;
    category: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {


    return (
        <RectButton {...rest} style={{ flexDirection: 'row'}}>
            <View style={styles.container}  >
            <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header} >
                        <Text style={styles.title}>
                            {data.category} - {data.date}
                        </Text>
                        <Text style={styles.title}>
                          
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.available} >
                            Vagas disponíveis: {data.availableVacancies}
                        </Text>
                    </View>
                    <View style={styles.address} >
                        <Text>
                            {data.address} - {data.neighborhood} - {data.city} - {data.UF}
                        </Text>
                    </View>
                </View>
            </View>
        </RectButton>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#d3d3d3',
        padding: 5,
        borderRadius: 10
    },
    content: {
        flex: 1
    },
    address: {
        justifyContent: 'space-evenly',
        fontSize: 15,
    },
    available: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    playersInfo: {

    }
})