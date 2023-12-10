{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BatonsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Pipe Baton" onPress={() => navigation.navigate('PipeBatonItem')} />
        <Button title="Stun Baton" onPress={() => navigation.navigate('StunBatonItem')} />
      </View>
    );
  }

export default BatonsScreen;