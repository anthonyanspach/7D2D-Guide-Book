{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SledgehammersScreen({ navigation }) {
    return (
      <View>
        <Text>Sledgehammers</Text>

        <Text>Description:</Text>
        <Text>Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>
        
        <Button title="Stone Sledgehammer" onPress={() => navigation.navigate('StoneSledgehammerItem')} />
        <Button title="Iron Sledgehammer" onPress={() => navigation.navigate('IronSledgehammerItem')} />
        <Button title="Steel Sledgehammer" onPress={() => navigation.navigate('SteelSledgehammerItem')} />
      </View>
    );
  }

export default SledgehammersScreen;