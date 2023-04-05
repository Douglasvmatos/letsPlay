
import { View, Text, TextArea } from 'native-base';
import { SmallInput } from '../components/SmallInput';
export function DayMonth() {

    return (
        <View marginX={8}>
            <View flexDirection='row' justifyContent='space-between'  width='100%'>
                <View justifyContent='center' alignItems='center'>
                <Text fontWeight='extrabold' fontSize={20} justifyContent='center' alignSelf='center'>Data</Text>
                    <View flexDirection='row'>
                        <SmallInput
                            maxLength={2}
                            placeholder='Dia'
                        />
                        <Text fontWeight='bold' fontSize={30} paddingX={2}>/</Text>
                        <SmallInput
                            maxLength={2}
                            placeholder='Mês'
                        />
                    </View>
                </View>
                <View justifyContent='center' alignItems='center'>
                <Text fontWeight='extrabold' fontSize={20} justifyContent='center' alignSelf='center'>Horário</Text>
                    <View flexDirection='row'>
                        <SmallInput
                            maxLength={2}
                            placeholder='Hora'
                        />
                        <Text fontWeight='bold' fontSize={30} paddingX={2}>:</Text>
                        <SmallInput
                            maxLength={2}
                            placeholder='Min'
                        />
                    </View>
                </View>
            </View>
            <View marginY={4} >
                <TextArea
                    placeholder='Descrição'
                    size="xl"
                    placeholderTextColor="blue"
                    multiline
                    borderRadius={10}
                    maxLength={500}
                    numberOfLines={5}
                    autoCorrect={false}
                    autoCompleteType={false}
                    backgroundColor='#D1CFBF'
                />
            </View>
        </View>
    )
}

