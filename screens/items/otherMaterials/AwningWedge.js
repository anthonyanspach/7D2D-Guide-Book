{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function AwningWedgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Awning Wedge Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Awning Wedge 1 is a craftable building material that is easy to craft and cheap on resources, Due to its low strength it is fairly weak and will easily be destroyed by Zombies. It is not possible to melt, scrap or use a Awning Wedge 1 as source of Combustible Fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Cloth Fragments</Text>
      </ScrollView>
    );
  }

export default AwningWedgeItem;