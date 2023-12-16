{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TrapsTurretsScreen({ navigation }) {
    return (
      <View>
        <Text>Traps and Turrets Screen</Text>
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