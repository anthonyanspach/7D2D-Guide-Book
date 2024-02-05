{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacit, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodenStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Stairs</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Wooden Stairs are a craftable building material that are easy to craft and cheap on resources, requiring no rare or expensive materials. Due to its low strength they are fairly weak and will easily be destroyed by Zombies. While it is not possible to melt or scrap Wooden Stairs it is possible to use them as a source of Combustible Fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default WoodenStairsItem;