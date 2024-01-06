{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ChemistryStationItem({ navigation }) {
    return (
      <View>
        <Text>Chemistry Station Info</Text>

        <Text>Description:</Text>
        <Text>The Chemistry Station is a new crafting station in Alpha 15. The Chemistry Station makes certain recipes faster and less expensive to make, while other recipes can only be crafted at a Chemistry Station.</Text>

        <Text>Crafting:</Text>
        <Text>1 Beaker</Text>
        <Text>100 Forged Iron</Text>
        <Text>3 Cooking Pots</Text>
        <Text>30 Short Iron Pipe</Text>
        <Text>5 Bottles of Acid</Text>

        <Text>Unlock Options:</Text>
        <Text>Forged Ahead</Text>
      </View>
    );
  }

export default ChemistryStationItem;