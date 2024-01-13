{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HazmatSuitScreen({ navigation }) {
    return (
      <View>
        <Text>Hazmat Suit Set Items</Text>
        <Button title="Hazmat Boots" onPress={() => navigation.navigate('HazmatBootsItem')} />
        <Button title="Hazmat Gloves" onPress={() => navigation.navigate('HazmatGlovesItem')} />
        <Button title="Hazmat Mask" onPress={() => navigation.navigate('HazmatMaskItem')} />
        <Button title="Hazmat Pants" onPress={() => navigation.navigate('HazmatPantsItem')} />
        <Button title="Hazmat Shirt" onPress={() => navigation.navigate('HazmatShirtItem')} />
      </View>
    );
  }

export default HazmatSuitScreen;