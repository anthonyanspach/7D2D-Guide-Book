{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PaddedArmorScreen({ navigation }) {
    return (
      <View>
        <Text>Padded Armor Set Screen</Text>
        <Button title="Padded Gloves" onPress={() => navigation.navigate('PaddedGlovesItem')} />
        <Button title="Padded Hood" onPress={() => navigation.navigate('PaddedHoodItem')} />
        <Button title="Padded Chest Armor" onPress={() => navigation.navigate('PaddedChestItem')} />
        <Button title="Padded Leg Armor" onPress={() => navigation.navigate('PaddedLegItem')} />
        <Button title="Padded Boots" onPress={() => navigation.navigate('PaddedBootsItem')} />
      </View>
    );
  }

export default PaddedArmorScreen;