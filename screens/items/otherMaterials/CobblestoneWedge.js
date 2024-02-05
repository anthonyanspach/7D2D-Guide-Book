{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function CobblestoneWedgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cobblestone Wedge Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Cobblestone Wedge is a the upgraded version of a Rebar Ramp Frame and can also be upgraded further into a Reinforced Cobblestone Ramp. It can not be crafted using other materials, the only ways to obtain a Cobblestone Wedge are through upgrading a Rebar Ramp Frame or using the Creative Menu. It is not possible to dismantle, scrap or use a Cobblestone Wedge as fuel. You can not destroy a Cobblestone Wedge, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default CobblestoneWedgeItem;