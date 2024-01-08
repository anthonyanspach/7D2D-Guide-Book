{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FarmPlotItem({ navigation }) {
    return (
      <View>
        <Text>Farm Plot Info</Text>

        <Text>Description:</Text>
        <Text>The Farm Plot is used to grow crops to create a renewable source of Food. Farm Plots cannot be picked up with the "E" key, but can be recovered after being placed. Upon destruction with any tool, or even an empty hand, the entire Farm Plot block will be added back into your inventory. This has a 100% success rate and no player-placed Farm Plot are lost when harvesting them in this manner. Unfortunately any seeds planted on the removed Farm Plot will be destroyed and lost forever.</Text>

        <Text>Farm Plots are generated as parts of certain Points of Interest and work exactly like player-placed Farm Plots for farming. The one difference in PoI Farm Plots is they yield 22 Clay Soil and 4 Nitrate Powder when destroyed instead of the Farm Plot block. POI Farm Plots are often placed as parts of indoor planters or gardens.</Text>

        <Text>Crafting:</Text>
        <Text>4 Wood</Text>
        <Text>5 Rotting Flesh</Text>
        <Text>12 Nitrate Powder</Text>
        <Text>50 Clay Soil</Text>
      </View>
    );
  }

export default FarmPlotItem;