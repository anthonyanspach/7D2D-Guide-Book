{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ScrapArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Scrap Armor Set Screen</Text>
        <Button title="Scrap Boots" onPress={() => navigation.navigate('ScrapBootsItem')} />
        <Button title="Scrap Chest Armor" onPress={() => navigation.navigate('ScrapChestItem')} />
        <Button title="Scrap Gloves" onPress={() => navigation.navigate('ScrapGlovesItem')} />
        <Button title="Scrap Helmet" onPress={() => navigation.navigate('ScrapHelmetItem')} />
        <Button title="Scrap Leg Armor" onPress={() => navigation.navigate('ScrapLegItem')} />
      </View>
    );
  }

export default ScrapArmorScreen;