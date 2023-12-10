{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BowsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Primitive Bow" onPress={() => navigation.navigate('PrimitiveBowItem')} />
        <Button title="Wooden Bow" onPress={() => navigation.navigate('WoodenBowItem')} />
        <Button title="Iron Crossbow" onPress={() => navigation.navigate('IronCrossbowItem')} />
        <Button title="Compound Bow" onPress={() => navigation.navigate('CompoundBowItem')} />
        <Button title="Compound Crossbow" onPress={() => navigation.navigate('CompoundCrossbowItem')} />
      </View>
    );
  }

export default BowsScreen;