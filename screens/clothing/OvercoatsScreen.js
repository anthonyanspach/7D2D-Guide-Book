{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function OvercoatsScreen({ navigation }) {
    return (
      <View>
        <Text>Overcoats Categories</Text>
        <Button title="Leather Poncho" onPress={() => navigation.navigate('LeatherPonchoItem')} />
        <Button title="College Jacket" onPress={() => navigation.navigate('CollegeJacketItem')} />
        <Button title="Jacket" onPress={() => navigation.navigate('JacketItem')} />
        <Button title="LeatherDuster" onPress={() => navigation.navigate('LeatherDusterItem')} />
        <Button title="Puffer Coat" onPress={() => navigation.navigate('PufferCoatItem')} />
        <Button title="Suit Jacket" onPress={() => navigation.navigate('SuitJacketItem')} />
      </View>
    );
  }

export default OvercoatsScreen;