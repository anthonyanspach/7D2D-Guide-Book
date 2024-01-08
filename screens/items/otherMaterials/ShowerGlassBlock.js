{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShowerGlassBlockItem({ navigation }) {
    return (
      <View>
        <Text>Shower Glass Block Info</Text>

        <Text>Description:</Text>
        <Text>A Shower Glass Block is a very weak, forgeable building material. It can be used as a window and is superior to Glass Pane in several ways. It is much easier to see through, and also the air treats it like a solid block, it blocks out Wetness, weather noise, and smells. The Bank in Perishton has walls made of large amounts of Shower Glass Block but the blocks cannot be harvested whole.</Text>

        <Text>Light Transparency:</Text>
        <Text>While the Shower Glass Block is totally transparent with only a blue tint, it catches the light from a flashlight. However, it doesn't cast a shadow.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default ShowerGlassBlockItem;