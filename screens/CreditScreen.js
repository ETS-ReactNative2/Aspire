import React from 'react';
import { Text, View } from 'react-native';

const CreditScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => alert('This is the "Credit" screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Credit Screen</Text>
    </View>
  )
}

export default CreditScreen;
