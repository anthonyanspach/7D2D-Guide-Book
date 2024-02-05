{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SteelStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Stairs Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Steel Stairs are the upgraded version of Reinforced Concrete Stairs. Due to their exceptional strength, they will take a long time to be destroyed by Zombies. They can not be crafted using other materials, the only ways to obtain Steel Stairs is through upgrading Concrete Stairs or placing them using the Creative Menu.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Reinforced Concrete Stairs</Text>
        <Text style={[styles.list]}>10 Forged Steel</Text>
      </ScrollView>
    );
  }

export default SteelStairsItem;