{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ContainersScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Containers</Text>

        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('CupboardItem')} >

          <Text style={[styles.buttonText]}>Cupboard</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('GreenDrawerItem')} >

          <Text style={[styles.buttonText]}>Green Drawer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('GunSafeItem')} >

          <Text style={[styles.buttonText]}>Gun Safe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('MailBoxItem')} >

          <Text style={[styles.buttonText]}>Mail Box</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('MailDropBox')} >

          <Text style={[styles.buttonText]}>Mail Drop Box</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('MicrowaveItem')} >

          <Text style={[styles.buttonText]}>Microwave</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('SecureStorageChestItem')} >

          <Text style={[styles.buttonText]}>Secure Storage Chest</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('StorageBoxItem')} >

          <Text style={[styles.buttonText]}>Storage Box</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('TrashCanItem')} >

          <Text style={[styles.buttonText]}>Trash Can</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('WoodenChestItem')} >

          <Text style={[styles.buttonText]}>Wooden Chest</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ContainersScreen;