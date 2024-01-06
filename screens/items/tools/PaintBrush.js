{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PaintBrushItem() {
    return (
      <View>
        <Text>Paint Brush info</Text>

        <Text>Description:</Text>
        <Text>Use to paint building blocks. You can also erase unwanted paint from blocks with the primary action. Requires Paint.</Text>

        <Text>Usage:</Text>
        <Text>While holding the Paint Brush hold (R) to bring up the radial menu, select Materials the very first option. As of 19.5 there is 177 patterns you can paint blocks. After you select your Material, Right Click to paint the surface or Left Click to erase. See Painting for more information.</Text>

        <Text>Crafting:</Text>
        <Text>2 Wood</Text>
        <Text>1 Leather</Text>
      </View>
    );
  }

export default PaintBrushItem;