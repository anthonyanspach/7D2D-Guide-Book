{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function FramesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Frames</Text>
        
        <TouchableOpacity style={[styles.windowButton]} onPress={() => navigation.navigate('WoodFrameItem')} >

          <Text style={[styles.buttonText]}>Wood Frame</Text>

        </TouchableOpacity> 
      </ScrollView>
    );
  }

export default FramesScreen;