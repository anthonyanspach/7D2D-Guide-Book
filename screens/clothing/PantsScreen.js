{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PantsScreen({ navigation }) {
    return (
      <View>
        <Text>Pants Screen</Text>
        <Button title="BDU Bottoms" onPress={() => navigation.navigate('BDUBottomsItem')} />
        <Button title="Denim Pants" onPress={() => navigation.navigate('DenimPantsItem')} />
        <Button title="Shorts" onPress={() => navigation.navigate('ShortsItem')} />
        <Button title="Overalls" onPress={() => navigation.navigate('OverallsItem')} />
        <Button title="Skirt" onPress={() => navigation.navigate('SkirtItem')} />
        <Button title="Suit Pants" onPress={() => navigation.navigate('SuitPantsItem')} />
      </View>
    );
  }

export default PantsScreen;