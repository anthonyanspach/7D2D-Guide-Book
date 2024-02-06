{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function SpecialToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Special Tools</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Special Tools perform specific functions and don't fit any aforementioned category.</Text>
        
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('BucketItem')} >

          <Text style={[styles.buttonText]}>Bucket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('PaintBrushItem')} >

          <Text style={[styles.buttonText]}>Paint Brush</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('LockpickItem')} >

          <Text style={[styles.buttonText]}>Lockpick</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('WireToolItem')} >

          <Text style={[styles.buttonText]}>Wire Tool</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default SpecialToolsScreen;