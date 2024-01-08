{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DoubleBarrelShotgunItem({ navigation }) {
    return (
      <View>
        <Text>Double Barrel Shotgun Info</Text>

        <Text>Description:</Text>
        <Text>Double Barrel Shotgun is commonly found throughout Navezgane while Looting. Is a good source of Shotgun Parts for crafting better grade of Shotguns, however the scrapped Double Barrel Shotgun must be a Quality 3 or higher. Double Barrel Shotgun only has 2 shots making it a valuable weapon in an emergency but not entirely practical at higher game stage Blood Moon Horde nights.</Text>

        <Text>Crafting:</Text>
        <Text>5 Shotgun Parts</Text>
        <Text>50 Forged Iron</Text>
        <Text>10 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>10 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Shotgun Weekly</Text>
      </View>
    );
  }

export default DoubleBarrelShotgunItem;