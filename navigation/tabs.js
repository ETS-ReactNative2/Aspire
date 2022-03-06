import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import CreditScreen from '../screens/CreditScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DebitCardScreenNavigator from '../navigation/DebitCardScreenNavigator';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
          labelStyle:{fontSize:9},
          activeTintColor: '#01D167'
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/icons/ic_tab_home.png')}
            />
          </View>
        ),
      }}/>
      <Tab.Screen name="Debit Card" component={DebitCardScreenNavigator} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/icons/ic_tab_debit-card.png')}
            />
          </View>
        ),
      }}/>
      <Tab.Screen name="Payments" component={PaymentsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/icons/ic_tab_payments.png')}
            />
          </View>
        ),
      }}/>
      <Tab.Screen name="Credit" component={CreditScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/icons/ic_tab_credit.png')}
            />
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/icons/ic_tab_profile.png')}
            />
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;
