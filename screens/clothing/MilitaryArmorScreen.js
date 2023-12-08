{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MilitaryArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Military Armor Set Screen</Text>
        <Button title="Military Boots" onPress={() => navigation.navigate('MilitaryBootsItem')} />
        <Button title="Military Stealth Boots" onPress={() => navigation.navigate('MilitaryStealthBootsItem')} />
        <Button title="Military Gloves" onPress={() => navigation.navigate('MilitaryGlovesItem')} />
        <Button title="Military Helmet" onPress={() => navigation.navigate('MilitaryHelmetItem')} />
        <Button title="Military Leg Armor" onPress={() => navigation.navigate('MilitaryLegItem')} />
        <Button title="Military Vest" onPress={() => navigation.navigate('MilitaryVestItem')} />
        <Button title="Mining Helmet" onPress={() => navigation.navigate('MiningHelmetItem')} />
      </View>
    );
  }

export default MilitaryArmorScreen;