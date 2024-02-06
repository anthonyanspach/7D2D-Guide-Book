{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function HatchScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hatches</Text>
        
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('IronHatchItem')} >

          <Text style={[styles.buttonText]}>Iron Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('IronHatchv2Item')} >

          <Text style={[styles.buttonText]}>Iron Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('IronHatchv3Item')} >

          <Text style={[styles.buttonText]}>Iron Hatch v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('SteelHatchItem')} >

          <Text style={[styles.buttonText]}>Steel Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('SteelHatchPoweredItem')} >

          <Text style={[styles.buttonText]}>Steel Hatch Powered</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('VaultHatchv2Item')} >

          <Text style={[styles.buttonText]}>Vault Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('VaultHatchv3Item')} >

          <Text style={[styles.buttonText]}>Vault Hatch v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('WoodenHatchItem')} >

          <Text style={[styles.buttonText]}>Wooden Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('WoodenHatchv2Item')} >

          <Text style={[styles.buttonText]}>Wooden Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('WoodenHatchv3Item')} >

          <Text style={[styles.buttonText]}>Wooden Hatch v3</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HatchScreen;