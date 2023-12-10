{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WeaponsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Clubs Screen" onPress={() => navigation.navigate('ClubsScreen')} />
        <Button title="Sledgehammers Screen" onPress={() => navigation.navigate('SledgehammersScreen')} />
        <Button title="Spears Screen" onPress={() => navigation.navigate('SpearsScreen')} />
        <Button title="Knuckles Screen" onPress={() => navigation.navigate('KnucklesScreen')} />
        <Button title="Knives Screen" onPress={() => navigation.navigate('KnivesScreen')} />
        <Button title="Batons Screen" onPress={() => navigation.navigate('BatonsScreen')} />
        <Button title="Bows Screen" onPress={() => navigation.navigate('BowsScreen')} />
        <Button title="Handguns & SMG Screen" onPress={() => navigation.navigate('HandgunsSMGScreen')} />
        <Button title="Shotguns Screen" onPress={() => navigation.navigate('ShotgunsScreen')} />
        <Button title="Machine Guns Screen" onPress={() => navigation.navigate('MachineGunsScreen')} />
        <Button title="Rifles Screen" onPress={() => navigation.navigate('RiflesScreen')} />
        <Button title="Robotic Turrets Screen" onPress={() => navigation.navigate('RoboticTurretsScreen')} />
        <Button title="Explosives Screen" onPress={() => navigation.navigate('ExplosivesScreen')} />
      </View>
    );
  }

export default WeaponsScreen;