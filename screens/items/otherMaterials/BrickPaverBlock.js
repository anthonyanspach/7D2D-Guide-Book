{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BrickPaverBlockItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Brick Paver Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Brick Paver Block is a fairly strong block in 7 Days to Die. It is a different style of Brick block, with all the same attributes. It is best destroyed with an Auger or Pickaxe You can make them by forging Clay Soil in a Forge.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Small Stone</Text>
        <Text style={[styles.list]}>60 Clay Soil</Text>
      </ScrollView>
    );
  }

export default BrickPaverBlockItem;