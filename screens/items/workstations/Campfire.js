{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CampfireItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Campfire Item</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Campfire is used to cook food, boil water, create medications, and craft a few resources. It can be found in the many lodges and numerous camp sites scattered all over the map. It can be crafted using 5 Small Stones. To use it, place it down and open by pressing "E".</Text>

        <Text style={[styles.text]}>The Campfire can be activated as long as it has fuel, regardless if it is being used to cook anything or not.</Text>
        <Text style={[styles.text]}>Being with in 2 blocks of the Campfire will grant the Warming Fire buff, which grants +15 Cold Resistance. Campfires may set fire to a character or zombie if they walk through it while it is turned on.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Small Stones</Text>
      </ScrollView>
    );
  }

export default CampfireItem;