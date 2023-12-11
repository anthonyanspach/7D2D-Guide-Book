{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BatonsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Robotic Sledge" onPress={() => navigation.navigate('RoboticSledgeItem')} />
        <Button title="Robotic Turret" onPress={() => navigation.navigate('RoboticTurretItem')} />
      </View>
    );
  }

export default BatonsScreen;