{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShotgunAutoTurretItem({ navigation }) {
    return (
      <View>
        <Text>Shotgun Auto Turret Info</Text>

        <Text>Description:</Text>
        <Text>The Shotgun Auto Turret senses targets in its view and fires shotgun shells at them.</Text>

        <Text>Crafting:</Text>
        <Text>62 Forged Steel</Text>
        <Text>15 Scrap Polymers</Text>
        <Text>15 Oil</Text>
        <Text>1 Motion Sensor</Text>
        <Text>4 Shotgun Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Electrical Traps</Text>
      </View>
    );
  }

export default ShotgunAutoTurretItem;