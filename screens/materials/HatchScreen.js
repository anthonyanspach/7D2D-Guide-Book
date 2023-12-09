{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HatchScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Iron Hatch" onPress={() => navigation.navigate('IronHatchItem')} />
        <Button title="Iron Hatch v2" onPress={() => navigation.navigate('IronHatchv2Item')} />
        <Button title="Iron Hatch v3" onPress={() => navigation.navigate('IronHatchv3Item')} />
        <Button title="Steel Hatch" onPress={() => navigation.navigate('SteelHatchItem')} />
        <Button title="Steel Hatch Powered" onPress={() => navigation.navigate('SteelHatchPoweredItem')} />
        <Button title="Vault Hatch v2" onPress={() => navigation.navigate('VaultHatchv2Item')} />
        <Button title="Vault Hatch v3" onPress={() => navigation.navigate('VaultHatchv3Item')} />
        <Button title="Wooden Hatch" onPress={() => navigation.navigate('WoodenHatchItem')} />
        <Button title="Wooden Hatch v2" onPress={() => navigation.navigate('WoodenHatchv2Item')} />
        <Button title="Wooden Hatch v3" onPress={() => navigation.navigate('WoodenHatchv3Item')} />
      </View>
    );
  }

export default HatchScreen;