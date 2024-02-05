{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodSpikesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Spikes Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Wood Spikes are a trap used to defend structures by impaling zombies, humans, and animals. Wood Spikes are crafted using 20 Wood as shown below. They have 3 stages that each deal 33 damage and have 33 hit points, but anything that steps into the trap will break a stage regardless of how many hit points the trap has. Each stage looks more broken than the last, but has the same stats.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>20 Wood</Text>
      </ScrollView>
    );
  }

export default WoodSpikesItem;