import React from 'react';
import { Text, View } from 'react-native';

const DebitCardScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => alert('This is the "Debit Card" screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Debit Card Screen</Text>
    </View>
  )
}

export default DebitCardScreen;
