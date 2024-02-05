{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function ShowerGlassBlockItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shower Glass Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Shower Glass Block is a very weak, forgeable building material. It can be used as a window and is superior to Glass Pane in several ways. It is much easier to see through, and also the air treats it like a solid block, it blocks out Wetness, weather noise, and smells. The Bank in Perishton has walls made of large amounts of Shower Glass Block but the blocks cannot be harvested whole.</Text>

        <Text style={[styles.textHeader]}>Light Transparency:</Text>
        <Text style={[styles.text]}>While the Shower Glass Block is totally transparent with only a blue tint, it catches the light from a flashlight. However, it doesn't cast a shadow.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default ShowerGlassBlockItem;