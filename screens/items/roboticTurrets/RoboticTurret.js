{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RoboticTurretItem({ navigation }) {
    return (
      <View>
        <Text>Robotic Turret Info</Text>

        <Text>Description:</Text>
        <Text>The Robotic Turret is the second form of a turret that can be used automatically or manually for defense. It can only be reloaded by hand. The Robotic Turret is only active when the owner moves within range of the turret.</Text>
        <Text>The perk Robotics Inventor, one of the Intellect skills, can be upgraded to improve the use of the Robotic Turret.</Text>

        <Text>Crafting:</Text>
        <Text>5 Robotics Parts</Text>
        <Text>200 Forged Steel</Text>
        <Text>50 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>50 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Tech Planet</Text>
      </View>
    );
  }

export default RoboticTurretItem;