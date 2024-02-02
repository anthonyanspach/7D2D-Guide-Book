{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function MegaCrushItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Mega Crush Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Mega Crush is a Non-craftable Beverage that can be found while Looting containers or random drops. Mega Crush can also be purchased from Traders and Vending Machines. The Mega Crush beverage gives the buff Mega Crush! when consumed, which will grant +15 Stamina Regeneration per second and increase run speed by 50% for 6 minutes.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +60</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +15%</Text>
        <Text style={[styles.buffList]}>Run Speed: +50%</Text>
        <Text style={[styles.buffList]}>Duration: 06:00</Text>
      </ScrollView>
    );
  }

export default MegaCrushItem;