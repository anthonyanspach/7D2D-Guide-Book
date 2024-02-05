{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function LeverActionRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Lever Action Rifle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Lever-Action Rifle is a new rifle in Alpha 20. Having replaced the Marksman Rifle as the Tier 2 rifle, it has similar stats as its predecessor. Assuming the Lever-Action Rifle is a high enough Quality it will scrap into Rifle Parts.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Rifle Parts</Text>
        <Text style={[styles.list]}>75 Forged Steel</Text>
        <Text style={[styles.list]}>50 Duct Tape</Text>
        <Text style={[styles.list]}>100 Scrap Polymers</Text>
        <Text style={[styles.list]}>50 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Rifle World</Text>
      </ScrollView>
    );
  }

export default LeverActionRifleItem;