{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ClothingScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Clothing Screen</Text>
        <Button title="Hats" onPress={() => navigation.navigate('HatsScreen')} />
        <Button title="Glasses" onPress={() => navigation.navigate('GlassesScreen')} />
        <Button title="Face" onPress={() => navigation.navigate('FaceScreen')} />
        <Button title="Overcoats" onPress={() => navigation.navigate('OvercoatsScreen')} />
        <Button title="Shirts" onPress={() => navigation.navigate('ShirtsScreen')} />
        <Button title="Pants" onPress={() => navigation.navigate('PantsScreen')} />
        <Button title="Boots" onPress={() => navigation.navigate('BootsScreen')} />
        <Button title="Light Helmets Armor" onPress={() => navigation.navigate('LightHelmetsArmorScreen')} />
        <Button title="Heavy Helmets Armor" onPress={() => navigation.navigate('HeavyHelmetsArmorScreen')} />
        <Button title="Plant Fiber Armor Set" onPress={() => navigation.navigate('PlantFiberScreen')} />
        <Button title="Padded Armor Set" onPress={() => navigation.navigate('PaddedArmorScreen')} />
        <Button title="Leather Armor Set" onPress={() => navigation.navigate('LeatherArmorScreen')} />
        <Button title="Military Armor Set" onPress={() => navigation.navigate('MilitaryArmorScreen')} />
        <Button title="Scrap Armor Set" onPress={() => navigation.navigate('ScrapArmorScreen')} />
        <Button title="Iron Armor Set" onPress={() => navigation.navigate('IronArmorScreen')} />
        <Button title="Steel Armor Set" onPress={() => navigation.navigate('SteelArmorScreen')} />
        <Button title="Hazmat Suit Set" onPress={() => navigation.navigate('HazmatSuitScreen')} />
        <Button title="Ghillie Suit Set" onPress={() => navigation.navigate('GhillieSuitScreen')} />
      </ScrollView>
    );
  }

export default ClothingScreen;