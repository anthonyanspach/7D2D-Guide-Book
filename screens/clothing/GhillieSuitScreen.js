{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function GhillieSuitScreen({ navigation }) {
    return (
      <View>
        <Text>Ghillie Suit Set Items</Text>
        <Button title="Ghillie Suit Hood" onPress={() => navigation.navigate('GhillieHoodItem')} />
        <Button title="Ghillie Suit Jacket" onPress={() => navigation.navigate('GhillieJacketItem')} />
        <Button title="Ghilllie Suit Pants" onPress={() => navigation.navigate('GhilliePantsItem')} />
      </View>
    );
  }

export default GhillieSuitScreen;