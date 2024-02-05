{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function SteelClubItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Club Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Steel Club is a tier 3 Club - a melee weapon used to pummel your enemies and a fair tool for destroying blocks. It appears to be that a transmission gearbox assembly torn off a car.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>During combat, The Steel Club is a mid-range melee weapon. There is a chance that the Steel Club will cause the target to be dismembered. The Steel Club is one-handed and thus benefits from the Flurry of Blows perk. By combining the Batter Up! Perk Books, Weighted Head Mod, and Metal Chain Mod, the Steel Club can effectively stun and trip enemy indefinitely.</Text>
        <Text style={[styles.text]}>As a tool, The Steel Club is reasonably effective when used to destroy blocks.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Steel Club Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>50 Wood</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
      </ScrollView>
    );
  }

export default SteelClubItem;