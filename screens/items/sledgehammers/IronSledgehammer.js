{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronSledgehammerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Sledgehammer Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Sledgehammer is a tier 2 sledgehammer - a two-handed melee weapon used to pummel your enemies and an effective tool for destroying blocks.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>During combat, The Iron Sledgehammer is an extended range melee weapon and can strike multiple Zombies at close quarters. It is one of the highest damage melee weapon types in the game, but attacks are slow, with a short delay from when the attack is initiated to when the swing occurs. It can kill an average Zombie with one direct hit to the head or two hits or more to the body. It is able to do massive damage with the stealth bonus multiplier, despite a lower stealth damage multiplier than other weapons. There is a chance that the Iron Sledgehammer will cause the target to be dismembered. Power attacks have a tendency to send zombies flying if it's a fatal or stunning hit.</Text>
        <Text style={[styles.text]}>As a tool, The Iron Sledgehammer has a reach of up to 3.5 blocks away and is very effective when used to destroy blocks. However, it is only slightly more effective than the Stone Axe for harvesting the materials from these blocks, since it has a 75% penalty to resources harvested. While it is not the appropriate tool for harvesting either stone-based or concrete blocks, it is an alternative due to its speed at destroying those types of blocks. If you have a stamina boosting effect or skill points invested in offsetting the high stamina cost, it is one of the quickest ways to break into safes and through vault doors.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>90 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>
      </ScrollView>
    );
  }

export default IronSledgehammerItem;