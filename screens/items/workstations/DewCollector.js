{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DewCollectorItem({ navigation }) {
    return (
      <View>
        <Text>Dew Collector Info</Text>

        <Text>Description:</Text>
        <Text>The Dew Collector is a newly added workstation in Alpha 21. As water collection has been rebalanced by removing empty jars & cans from the game[1], the Dew Collector has been added to provide clean drinking water.</Text>

        <Text>Usage:</Text>
        <Text>The Dew Collector must be placed with a clear view of the sky, bars and other 'see-through' shapes are acceptable to be placed above. Once placed, the Dew Collector will automatically accumulate Water at a rate of approximately 3 jars every 24 game hours (between 6-10 in-game hours per water). Multiple Dew Collectors can be placed being limited only by the amount of Water Filters the player has access to.</Text>

        <Text>Crafting:</Text>
        <Text>1 Water Filter</Text>
        <Text>100 Scrap Polymers</Text>
        <Text>4 Short Iron Pipe</Text>
        <Text>4 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Forged Ahead</Text>
      </View>
    );
  }

export default DewCollectorItem;