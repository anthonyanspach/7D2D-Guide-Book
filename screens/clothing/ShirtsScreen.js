{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function ShirtsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shirts Categories</Text>

        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('BDUTopItem')} >

          <Text style={[styles.buttonText]}>BDU Top</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('HazmatShirtItem')} >

          <Text style={[styles.buttonText]}>Hazmat Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('HoodedSweatshirtItem')} >

          <Text style={[styles.buttonText]}>Hooded Sweatshirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('FlannelShirtItem')} >

          <Text style={[styles.buttonText]}>Flannel Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('PlantFiberShirtItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('ShirtItem')} >

          <Text style={[styles.buttonText]}>Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('SweatshirtItem')} >

          <Text style={[styles.buttonText]}>Sweatshirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('TankTopItem')} >

          <Text style={[styles.buttonText]}>Tank Top</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('TShirtItem')} >

          <Text style={[styles.buttonText]}>T Shirt</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ShirtsScreen;