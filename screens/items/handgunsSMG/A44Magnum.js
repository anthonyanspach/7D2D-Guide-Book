{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function A44MagnumItem({ navigation }) {
    return (
      <View>
        <Text>.44 Magnum Info</Text>

        <Text>Description:</Text>
        <Text>A .44 Magnum is a short to medium range double action revolver which can be found throughout the world, more often at Shotgun Messiah Gun Stores or crafted. This weapon requires the .44 Magnum Bullet and will hold six cartridges. It reloads automatically if the player is carrying the correct Ammunition, it can be done manually by using the reload key, which is R by default.</Text>

        <Text>Crafting:</Text>
        <Text>5 Handgun Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>25 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Handgun Magazine</Text>
      </View>
    );
  }

export default A44MagnumItem;