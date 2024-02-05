{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ExplodingCrossbowBoltItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Exploding Crossbow Bolt Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>An Exploding Crossbow Bolt is a type of Explosive Ammunition for the Crossbow obtained through crafting. It inflicts high damage to all entities within range of the point of impact. The point of impact may also take damage from the arrow itself. The explosion will also damage blocks. The Exploding Crossbow Bolt can be crafted by reading the Ranger's Guide to Archery Vol.2.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Steel Arrowhead</Text>
        <Text style={[styles.list]}>2 Scrap Polymers</Text>
        <Text style={[styles.list]}>8 Gun Powder</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Ranger's Guide to Archery Vol.2</Text>
      </ScrollView>
    );
  }

export default ExplodingCrossbowBoltItem;