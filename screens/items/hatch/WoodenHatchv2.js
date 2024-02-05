{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WoodenHatchv2Item({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Hatch V2</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Wooden Hatch v2 is a hatch that has the ability to be locked by the player. It is upgraded from a Wooden Hatch using Wood. A Wooden Hatch v2 can be upgraded to a Scrap Iron Hatch (which can be further upgraded to a Vault Hatch).</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>Unknown</Text>
      </ScrollView>
    );
  }

export default WoodenHatchv2Item;