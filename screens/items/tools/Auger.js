{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function AugerItem() {
    return (
      <View>
        <Text>Auger info</Text>

        <Text>Description:</Text>
        <Text>The Auger is a multipurpose tool that can be used to rapidly destroy anything but wooden blocks. The Auger can be looted from Decayed Sedans, Working Stiffs Crate, Garage Storage, and Bank Wall Safe. While the Auger can be used as a melee weapon, it is ill-advised as it deals very low damage and can often use a lot of gas just to kill a few enemies. Additionally, no scaling with any attribute provides any bonuses in mid to late game. -The Auger requires fuel in the form of Gas Cans. Refueling is done automatically and can also be done manually by pressing the reload button (while the Auger is selected and with a Gas Can in the inventory).-</Text>

        <Text>Uses:</Text>
        <Text>Harvesting. Using the primary click (default left mouse button) will dig with the Auger, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to dig into the earth, harvesting Resources with each use. Shovels are the most effective tools for harvesting soft earth-based blocks such as Gravel, Clay Soil, Sand, Snow, or Forest Ground. Shovels are also the most effective tools for harvesting Cobblestone Rocks and Cement from the Pallets found in various POIs.</Text>

        <Text>Crafting:</Text>
        <Text>5 Motor Tools Parts</Text>
        <Text>1 Bicycle Handlebars</Text>
        <Text>1 Engine</Text>
        <Text>50 Forged Steel</Text>

        <Text>Unlock Options:</Text>
        <Text>Tools Digest</Text>
      </View>
    );
  }

export default AugerItem;