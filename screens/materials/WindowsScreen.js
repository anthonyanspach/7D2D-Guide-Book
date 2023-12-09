{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WindowsScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Wood Window" onPress={() => navigation.navigate('WoodWindowItem')} />
      </View>
    );
  }

export default WindowsScreen;