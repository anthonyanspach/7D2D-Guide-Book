{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShotgunsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Pipe Shotgun" onPress={() => navigation.navigate('PipeShotgunItem')} />
        <Button title="Double Barrel Shotgun" onPress={() => navigation.navigate('DoubleBarrelShotgunItem')} />
        <Button title="Pump Shotgun" onPress={() => navigation.navigate('PumpShotgunItem')} />
        <Button title="Auto Shotgun" onPress={() => navigation.navigate('AutoShotgunItem')} />
    </View>
    );
  }

export default ShotgunsScreen;