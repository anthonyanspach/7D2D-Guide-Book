{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function CandyCaneKnifeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Candy Cane Knife info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Candy Cane Knife is a bladed melee weapon that is also quite useful as a butchering tool. The Candy Cane Knife cannot be crafted and is a seasonal item only being available during the month of December in the actual calendar year. You can find these knives when looting during the month of December.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>When used in combat, a Candy Cane Knife is an effective, short range Melee weapon.</Text>
        <Text style={[styles.text]}>Butchering. Clicking the left mouse button will use the Candy Cane Knife, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Candy Cane Knife is an effective tool for butchering dead animals.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default CandyCaneKnifeItem;