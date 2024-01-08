{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ExplodingArrowItem({ navigation }) {
    return (
      <View>
        <Text>Exploding Arrow Info</Text>

        <Text>Description:</Text>
        <Text>Exploding Arrows are an Explosive type of Ammunition used by Bows. In order to equip arrows, hold the reload key while the bow is equipped. Select the ammunition type in the shown radial menu.</Text>

        <Text>Crafting:</Text>
        <Text>1 Steel Arrowhead</Text>
        <Text>2 Scrap Polymers</Text>
        <Text>6 Gun Powder</Text>
        <Text>1 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Ranger's Guide to Archery Vol.2</Text>
      </View>
    );
  }

export default ExplodingArrowItem;