{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function WoodenChestItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Chest Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Wooden Chest is a lootable container found throughout the world in various POIs.</Text>

        <Text style={[styles.text]}>Not to be confused with Secure Storage Chest, a player-created block.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default WoodenChestItem;