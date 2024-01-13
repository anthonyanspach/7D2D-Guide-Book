{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RoboticTurretsScreen({ navigation }) {
    return (
      <View>
        <Text>Robotic Turrets</Text>

        <Text>Decription:</Text>
        <Text>Robotic turrets are covered under the perk Robotics Inventor. They offer a unique portable weapons that can be used as a normal weapon or placed to attack on their own. Together with the stun baton they offer a solid DPS to enemies.</Text>
        
        <Button title="Robotic Sledge" onPress={() => navigation.navigate('RoboticSledgeItem')} />
        <Button title="Robotic Turret" onPress={() => navigation.navigate('RoboticTurretItem')} />
      </View>
    );
  }

export default RoboticTurretsScreen;