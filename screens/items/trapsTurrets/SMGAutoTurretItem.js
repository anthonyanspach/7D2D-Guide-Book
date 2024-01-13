{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SMGAutoTurretItem({ navigation }) {
    return (
      <View>
        <Text>SMG Auto Turret Info</Text>

        <Text>Description:</Text>
        <Text>The SMG Auto Turret senses targets in its view and fires 9mm Ammo at them.</Text>

        <Text>Crafting:</Text>
        <Text>1 Motion Sensor</Text>
        <Text>46 Forged Steel</Text>
        <Text>4 Handgun Parts</Text>
        <Text>15 Oil</Text>
        <Text>7 Scrap Polymers</Text>

        <Text>Unlock Options:</Text>
        <Text>Electrical Traps</Text>
      </View>
    );
  }

export default SMGAutoTurretItem;