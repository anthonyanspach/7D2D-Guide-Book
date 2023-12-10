{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MachineGunsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Pipe Machine Gun" onPress={() => navigation.navigate('PipeMachineGunItem')} />
        <Button title="AK-47 Machine Gun" onPress={() => navigation.navigate('AK47MachineGunItem')} />
        <Button title="Tactical Assault Rifle" onPress={() => navigation.navigate('TacticalAssaultRifleItem')} />
        <Button title="M60 Machine Gun" onPress={() => navigation.navigate('M60MachineGunItem')} />
      </View>
    );
  }

export default MachineGunsScreen;