{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ForgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Forge Item</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Forge is used to smelt items into refined products that are more useful. This process requires time, fuel sources to operate, and scrapped or whole materials to smelt. A Forge allows survivors to craft advanced Tools, Building Materials, ammunition components, and other Resources.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>Fuel is placed in the cells below the tool cells. The Forge can be turned on either with the on/off button below the fuel or turned on by starting a new recipe. The Forge will not turn off automatically unless all the fuel is expended. No recipe will be available until there is fuel in the fuel cells. Fuels include all items with a burn time, including Coal (100 seconds), Wood (50 seconds), and Oil Shale (5 seconds), and Gas Can (2 seconds).</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>50 Cobblestone Rocks</Text>
        <Text style={[styles.list]}>1 Wood Log</Text>
        <Text style={[styles.list]}>10 Leather</Text>
        <Text style={[styles.list]}>3 Duct Tape</Text>
        <Text style={[styles.list]}>3 Short Iron Pipes</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default ForgeItem;