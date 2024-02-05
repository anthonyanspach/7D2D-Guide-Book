{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ShamChowderItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Sham Chowder Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Sham Chowder is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Sham Chowder will have a positive effect on Fullness, Hydration, Stamina, and Health. Sham Chowder will increase Fortitude +1 for a 10 minute duration.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +53</Text>
        <Text style={[styles.attList]}>Hydration: +10</Text>
        <Text style={[styles.attList]}>Stamina: +30</Text>
        <Text style={[styles.attList]}>Health: +80</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Can of Sham</Text>
        <Text style={[styles.list]}>1 Water</Text>
        <Text style={[styles.list]}>2 Potatos</Text>
        <Text style={[styles.list]}>2 Ear of Corn</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default ShamChowderItem;