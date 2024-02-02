{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function YuccaJuiceSmoothieItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Yucca Juice Smoothie Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Yucca Juice Smoothie has a positive effect on the player's character's Fullness, Hydration, Stamina Regen, and Health. It is used to warm players up in the extremely cold winter biome. It can be crafted without the use of a campfire, and is extremely useful for players who can't craft or access warm clothing yet.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +22</Text>
        <Text style={[styles.attList]}>Hydration: +78</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: +11</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +15%</Text>
        <Text style={[styles.buffList]}>Cold Resist: +30</Text>
        <Text style={[styles.buffList]}>Duration: 06:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Yucca Fruit</Text>
        <Text style={[styles.list]}>4 Blueberries</Text>
        <Text style={[styles.list]}>1 Snowball</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default YuccaJuiceSmoothieItem;