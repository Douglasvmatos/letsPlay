import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { SignIn } from '../pages/SignIn'
import { NewUserEmail } from '../pages/NewUserEmail'
import { Home } from '../pages/Home'
import { NewGame } from '../pages/NewGame'

export function AppRoutes() {
    return (
    <Navigator
    screenOptions={{ headerShown: false}}
    >
        <Screen
        name="signIn"
        component={SignIn}
        />
        <Screen
        name="newUserEmail"
        component={NewUserEmail}
        />
        <Screen
        name="home"
        component={Home}
        />
        <Screen
        name="newGame"
        component={NewGame}
        />
    </Navigator>
    )
}