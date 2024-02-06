{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ItemSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Item Mechanics</Text>

        <Text style={[styles.textHeader]}>Quality:</Text>
        <Text style={[styles.text]}>The Quality of an item can be found by looking at the current number and color of the Durability bar at the bottom of certain item icons.</Text>

        <Text style={[styles.text]}>Not all items have Quality levels, but most armor, weapons, and tools do have a Quality level.</Text>

        <Text style={[styles.text]}>The level of Quality determines its Max Durability and the number of Mods (if applicable) that can be used on it.</Text>

        <Text style={[styles.text]}>Repairing does not affect the Quality. In previous game versions, repairing would lower the item's Quality level.</Text>


        <Text style={[styles.textHeader]}>Durability:</Text>
        <Text style={[styles.text]}>Durability represents the current health or hit points of an item or block.</Text>

        <Text style={[styles.text]}>The durability of an item can be estimated by looking at the colored bar at the bottom of certain item icons. The more depleted the bar, the less durability it has, as the bar represents the percentage of Max Durability the item has remaining.</Text>

        <Text style={[styles.text]}>Not all items have durability, but most armor, weapons, and tools do have durability.</Text>

        <Text style={[styles.text]}>Armor, weapons, and tools function at full capacity until Durability reaches zero.</Text>

        <Text style={[styles.text]}>When an item reaches zero durability, it must be repaired and is unusable otherwise. Items can be repaired with any amount of durability lost. Repairing an item restores its Durability back to Max Durability.</Text>


        <Text style={[styles.textHeader]}>Max Stack:</Text>
        <Text style={[styles.text]}>Every item has a max stack of how many of that item can be carried in a single slot.</Text>

        <Text style={[styles.text]}>There is no way to raise the max stack of an item.</Text>

        <Text style={[styles.text]}>Not every item has the same max stack. Equipment like Stone Axes have a max stack of 1, while resources like Small Stone can go as high as 6000.</Text>
      </ScrollView>
    );
  }

export default ItemSystemScreen;