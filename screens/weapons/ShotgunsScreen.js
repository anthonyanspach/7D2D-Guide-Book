{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShotgunsScreen({ navigation }) {
    return (
      <View>
        <Text>Shotguns</Text>

        <Text>Description:</Text>
        <Text>Shotguns are covered under the perk Boomstick. They offer the player a good source of damage in close-quarter combat. However, shotguns' power falls off quite fast when the range between the player and the target increases.</Text>
        
        <Button title="Pipe Shotgun" onPress={() => navigation.navigate('PipeShotgunItem')} />
        <Button title="Double Barrel Shotgun" onPress={() => navigation.navigate('DoubleBarrelShotgunItem')} />
        <Button title="Pump Shotgun" onPress={() => navigation.navigate('PumpShotgunItem')} />
        <Button title="Auto Shotgun" onPress={() => navigation.navigate('AutoShotgunItem')} />
    </View>
    );
  }

export default ShotgunsScreen;