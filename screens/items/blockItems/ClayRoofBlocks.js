{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ClayRoofBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Clay Roof Blocks info</Text>

        <Text>Description:</Text>
        <Text>Clay Roof Blocks is a craftable building material. It is crafted in the forge. It has 500 hit points. It is best destroyed with an Auger or Pickaxe. Hitting the block will yield Cobblestone Rocks.</Text>

        <Text>Crafting:</Text>
        <Text>5 Small Stone</Text>
        <Text>30 Clay Soil</Text>
      </View>
    );
  }

export default ClayRoofBlocksItem;