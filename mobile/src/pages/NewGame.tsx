
import { LinearGradient } from 'expo-linear-gradient';
import { View, ScrollView } from 'native-base';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { SearchCEP } from '../components/SearchCEP';
import { DayMonth } from '../components/DayMonth';
import Category from '../components/Category';



export function NewGame() {
    return (
        <LinearGradient
            colors={['#3F5999', '#3b5545', '#808080']}
            style={{ flex: 1 }}
        >
            <Header title='Agendar partida' showBackButton showShareButton />
                    <Category />
            <ScrollView marginTop={5}>
                    <DayMonth />
                    <SearchCEP />
                    <View paddingBottom={500}>
                        <Button
                            title="Agendar"
                        />
                    </View>
            </ScrollView>
        </LinearGradient>
    )
}