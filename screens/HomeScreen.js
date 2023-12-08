{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Starting Guide" onPress={() => navigation.navigate('StartingGuide')} />
        <Button title="Items" onPress={() => navigation.navigate('ItemsScreen')} />
      </View>
    );
  }

export default HomeScreen;