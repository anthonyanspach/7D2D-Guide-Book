{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function ClayRoofBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Clay Roof Blocks info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Clay Roof Blocks is a craftable building material. It is crafted in the forge. It has 500 hit points. It is best destroyed with an Auger or Pickaxe. Hitting the block will yield Cobblestone Rocks.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Small Stone</Text>
        <Text style={[styles.list]}>30 Clay Soil</Text>
      </ScrollView>
    );
  }

export default ClayRoofBlocksItem;