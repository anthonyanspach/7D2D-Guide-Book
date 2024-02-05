{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CandleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Candle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Candle is a craftable item. It can be used as a light source by holding it, but also by placing the Candle on the ground or hanging it on the wall. A Candle is less effective as a light source than most other light sources, such as the Torch.</Text>

        <Text style={[styles.text]}>A Candle is used to provide light in dark areas and can be placed on almost any surface and will illuminate a small area around it. The player can move a candle from one location to another at any time by picking it up using the E key.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Plant Fiber</Text>
        <Text style={[styles.list]}>1 Animal Fat</Text>
      </ScrollView>
    );
  }

export default CandleItem;