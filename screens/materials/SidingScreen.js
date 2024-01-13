{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SidingScreen({ navigation }) {
    return (
      <View>
        <Text>Siding</Text>
        <Button title="Plywood" onPress={() => navigation.navigate('PlywoodItem')} />
      </View>
    );
  }

export default SidingScreen;