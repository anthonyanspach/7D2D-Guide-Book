{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function PaintBrushItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Paint Brush info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Use to paint building blocks. You can also erase unwanted paint from blocks with the primary action. Requires Paint.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>While holding the Paint Brush hold (R) to bring up the radial menu, select Materials the very first option. As of 19.5 there is 177 patterns you can paint blocks. After you select your Material, Right Click to paint the surface or Left Click to erase. See Painting for more information.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Wood</Text>
        <Text style={[styles.list]}>1 Leather</Text>
      </ScrollView>
    );
  }

export default PaintBrushItem;