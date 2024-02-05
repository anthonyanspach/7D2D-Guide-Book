{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ChemistryStationItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Chemistry Station Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Chemistry Station is a new crafting station in Alpha 15. The Chemistry Station makes certain recipes faster and less expensive to make, while other recipes can only be crafted at a Chemistry Station.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Beaker</Text>
        <Text style={[styles.list]}>100 Forged Iron</Text>
        <Text style={[styles.list]}>3 Cooking Pots</Text>
        <Text style={[styles.list]}>30 Short Iron Pipe</Text>
        <Text style={[styles.list]}>5 Bottles of Acid</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default ChemistryStationItem;