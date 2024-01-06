{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CandyCaneKnifeItem() {
    return (
      <View>
        <Text>Candy Cane Knife info</Text>

        <Text>Description:</Text>
        <Text>The Candy Cane Knife is a bladed melee weapon that is also quite useful as a butchering tool. The Candy Cane Knife cannot be crafted and is a seasonal item only being available during the month of December in the actual calendar year. You can find these knives when looting during the month of December.</Text>

        <Text>Uses:</Text>
        <Text>When used in combat, a Candy Cane Knife is an effective, short range Melee weapon.</Text>
        <Text>Butchering. Clicking the left mouse button will use the Candy Cane Knife, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Candy Cane Knife is an effective tool for butchering dead animals.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default CandyCaneKnifeItem;