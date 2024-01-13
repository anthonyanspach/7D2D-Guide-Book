{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TrapsTurretsScreen({ navigation }) {
    return (
      <View>
        <Text>Traps and Turrets</Text>

        <Text>Description:</Text>
        <Text>Apart from a variety of hand held tools, there is also a variety of placeable items that can help deal damage to enemies. The table below lists all of them, with additional stats. Among them are various types of mines, turrets and traps, both triggerable like Dart Trap or Blade Trap, but also giving out damage when walked upon like Wood Spikes and Barbed Fence Wire.</Text>
        
        <Button title="Barbed Fence Wire" onPress={() => navigation.navigate('BarbedFenceWireItem')} />
        <Button title="Blade Trap" onPress={() => navigation.navigate('BladeTrapItem')} />
        <Button title="Dart Trap" onPress={() => navigation.navigate('DartTrapItem')} />
        <Button title="Electric Fence Post" onPress={() => navigation.navigate('ElectricFencePostItem')} />
        <Button title="Iron Spikes" onPress={() => navigation.navigate('IronSpikesItem')} />
        <Button title="Shotgun Auto Turret" onPress={() => navigation.navigate('ShotgunAutoTurretItem')} />
        <Button title="SMG Auto Turret" onPress={() => navigation.navigate('SMGAutoTurretItem')} />
        <Button title="Wood Spikes" onPress={() => navigation.navigate('WoodSpikesItem')} />
      </View>
    );
  }

export default TrapsTurretsScreen;