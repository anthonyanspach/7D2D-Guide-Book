{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function BedrollItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bedroll Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Bedroll is an item that may be crafted using Plant Fibers as shown below or found around the map. A Bedroll makes a single spawn point at the location it was placed at; it will be your only spawn point.</Text>
        <Text style={[styles.text]}>After the placement, its location will be highlighted on the map, marked as an icon of a bed.</Text>
        <Text style={[styles.text]}>It is recommended to place a Secure Storage Chest with some basic loot nearby in case you die and lose all the items in your tool bar and backpack</Text>
        <Text style={[styles.text]}>Additionally, a placed Bedroll will block zombie spawns in a rectangular area of 31x31 meters from bedrock to sky.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Plant Fibers</Text>
      </ScrollView>
    );
  }

export default BedrollItem;