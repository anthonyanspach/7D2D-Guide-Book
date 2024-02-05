{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PipeRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Rifle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Pipe Rifles were added to the game in Alpha 20. They are intended to be an early-game weapon, much like their precursor the Blunderbuss. The two core components used in crafting are pipes and glue.</Text>

        <Text style={[styles.text]}>Like all pipe weapons, it can be crafted right at the beginning of the game (assuming the player has all its crafting ingredients) requiring no workstations, books or skills. Headshotting adds 25 extra damage in A21.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Short Iron Pipe</Text>
        <Text style={[styles.list]}>6 Glue</Text>
        <Text style={[styles.list]}>18 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Rifle World</Text>
      </ScrollView>
    );
  }

export default PipeRifleItem;