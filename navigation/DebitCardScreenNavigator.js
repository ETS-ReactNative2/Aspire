import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import DebitCardScreen from '../screens/DebitCardScreen'
import WeeklyLimitScreen from '../screens/WeeklyLimitScreen'

const Stack = createStackNavigator()

const DebitCardScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Debit Card"
                component={DebitCardScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WeeklyLimitScreen"
                component={WeeklyLimitScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
export default DebitCardScreenNavigator;
