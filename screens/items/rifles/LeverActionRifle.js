{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function LeverActionRifleItem({ navigation }) {
    return (
      <View>
        <Text>Lever Action Rifle Info</Text>

        <Text>Description:</Text>
        <Text>The Lever-Action Rifle is a new rifle in Alpha 20. Having replaced the Marksman Rifle as the Tier 2 rifle, it has similar stats as its predecessor. Assuming the Lever-Action Rifle is a high enough Quality it will scrap into Rifle Parts.</Text>

        <Text>Crafting:</Text>
        <Text>5 Rifle Parts</Text>
        <Text>75 Forged Steel</Text>
        <Text>50 Duct Tape</Text>
        <Text>100 Scrap Polymers</Text>
        <Text>50 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Rifle World</Text>
      </View>
    );
  }

export default LeverActionRifleItem;