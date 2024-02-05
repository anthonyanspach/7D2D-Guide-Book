{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function ConcreteFormBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Concrete Form Blocks Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>It is upgraded, with a tool, using Concrete Mix to Poured Concrete. After some time the initially wet concrete dries, the wooden mold pops out and Reinforced Concrete Blocks is obtained. Reinforced Concrete is also stronger than its wet form.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Rebar Frame</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default ConcreteFormBlocksItem;