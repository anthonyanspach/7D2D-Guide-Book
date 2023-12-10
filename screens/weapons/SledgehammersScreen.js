{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SledgehammersScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Stone Sledgehammer" onPress={() => navigation.navigate('StoneSledgehammerItem')} />
        <Button title="Iron Sledgehammer" onPress={() => navigation.navigate('IronSledgehammerItem')} />
        <Button title="Steel Sledgehammer" onPress={() => navigation.navigate('SteelSledgehammerItem')} />
      </View>
    );
  }

export default SledgehammersScreen;