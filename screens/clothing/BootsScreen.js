{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BootsScreen({ navigation }) {
    return (
      <View>
        <Text>Boots Screen</Text>
        <Button title="High Performance Running Shoes" onPress={() => navigation.navigate('HighPerfRunShoesItem')} />
        <Button title="Cowboy Boots" onPress={() => navigation.navigate('CowboyBootsItem')} />
        <Button title="Dress Shoes" onPress={() => navigation.navigate('DressShoesItem')} />
        <Button title="Gothic Boots" onPress={() => navigation.navigate('GothicBootsItem')} />
        <Button title="Running Shoes" onPress={() => navigation.navigate('RunningShoesItem')} />
        <Button title="Worn Boots" onPress={() => navigation.navigate('WornBootsItem')} />
      </View>
    );
  }

export default BootsScreen;