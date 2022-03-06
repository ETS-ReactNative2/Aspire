import React from 'react';
import { Text, View } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => alert('This is the "Profile" screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen;
