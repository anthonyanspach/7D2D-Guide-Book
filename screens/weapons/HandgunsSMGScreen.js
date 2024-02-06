{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function HandgunsSMGScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Handguns and SMGs</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Handguns and the SMG are covered under the perk Gunslinger. Pistols offer a decent attack speed and magazine size with quite high damage. The SMG does the same but automatically.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PipePistolItem')} >

          <Text style={[styles.buttonText]}>Pipe Pistol</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PistolItem')} >

          <Text style={[styles.buttonText]}>Pistol</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('A44MagnumItem')} >

          <Text style={[styles.buttonText]}>.44 Magnum</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('A44DesertVultureItem')} >

          <Text style={[styles.buttonText]}>.44 Desert Vulture</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SMGItem')} >

          <Text style={[styles.buttonText]}>SMG-5</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HandgunsSMGScreen;