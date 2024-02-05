{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WashingMachineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Washing Machine Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Washing Machine is a lootable container found throughout the world in certain POIs.</Text>

        <Text style={[styles.buffListHeader]}>Dismantling:</Text>
        <Text style={[styles.buffList]}>Possible Harvested Materials:</Text>
        <Text style={[styles.buffList]}>Iron</Text>
        <Text style={[styles.buffList]}>Electrical Parts</Text>
        <Text style={[styles.buffList]}>Mechanical Parts</Text>
        <Text style={[styles.buffList]}>Short Iron Pipe</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default WashingMachineItem;