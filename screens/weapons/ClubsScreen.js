{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <View>
        <Button title="Wooden Club" onPress={() => navigation.navigate('WoodenClubItem')} />
        <Button title="Candy Cane Club" onPress={() => navigation.navigate('CandyCaneClubItem')} />
        <Button title="Steel Club" onPress={() => navigation.navigate('SteelClubItem')} />
        <Button title="Baseball Bat" onPress={() => navigation.navigate('BaseballBatItem')} />
      </View>
    );
  }

export default WorkstationsScreen;