import React from 'react';
import { Text, View } from 'react-native';

const PaymentsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => alert('This is the "Payments" screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Payments Screen</Text>
    </View>
  )
}

export default PaymentsScreen;
