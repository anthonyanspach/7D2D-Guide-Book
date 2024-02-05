{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function GumboStewItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Gumbo Stew Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Gumbo Stew is a high-tier Food item that restores player's food and health. It can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Gumbo Stew will have a positive effect on Fullness, Hydration, Stamina, and Health.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +112</Text>
        <Text style={[styles.attList]}>Hydration: +20</Text>
        <Text style={[styles.attList]}>Stamina: +40</Text>
        <Text style={[styles.attList]}>Health: +56</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Large Beef Ration</Text>
        <Text style={[styles.list]}>1 Can of Peas</Text>
        <Text style={[styles.list]}>1 Can of Stock</Text>
        <Text style={[styles.list]}>3 Animal Fat</Text>
        <Text style={[styles.list]}>1 Water</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default GumboStewItem;