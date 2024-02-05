{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function DewCollectorItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Dew Collector Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Dew Collector is a newly added workstation in Alpha 21. As water collection has been rebalanced by removing empty jars & cans from the game[1], the Dew Collector has been added to provide clean drinking water.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>The Dew Collector must be placed with a clear view of the sky, bars and other 'see-through' shapes are acceptable to be placed above. Once placed, the Dew Collector will automatically accumulate Water at a rate of approximately 3 jars every 24 game hours (between 6-10 in-game hours per water). Multiple Dew Collectors can be placed being limited only by the amount of Water Filters the player has access to.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Water Filter</Text>
        <Text style={[styles.list]}>100 Scrap Polymers</Text>
        <Text style={[styles.list]}>4 Short Iron Pipe</Text>
        <Text style={[styles.list]}>4 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default DewCollectorItem;