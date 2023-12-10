{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DoorsScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Garage Door Metal" onPress={() => navigation.navigate('GarageDoorMetalItem')} />
        <Button title="Garage Door Metal v2" onPress={() => navigation.navigate('GarageDoorMetalv2Item')} />
        <Button title="Garage Door Metal v3" onPress={() => navigation.navigate('GarageDoorMetalv3Item')} />
        <Button title="Iron Door" onPress={() => navigation.navigate('IronDoorItem')} />
        <Button title="Iron Door v2" onPress={() => navigation.navigate('IronDoorv2Item')} />
        <Button title="Iron Door v3" onPress={() => navigation.navigate('IronDoorv3Item')} />
        <Button title="Jail Door" onPress={() => navigation.navigate('JailDoorItem')} />
        <Button title="Metal Reinforced Wooden Door" onPress={() => navigation.navigate('MetalReinforcedWoodenDoorItem')} />
        <Button title="Reinforced Drawbridge" onPress={() => navigation.navigate('ReinforcedDrawbridgeItem')} />
        <Button title="Reinforced Drawbridge Powered" onPress={() => navigation.navigate('ReinforcedDrawbridgePoweredItem')} />
        <Button title="Reinforced Secure Wooden Door" onPress={() => navigation.navigate('ReinforcedSecureWoodenDoorItem')} />
        <Button title="Vault Door" onPress={() => navigation.navigate('VaultDoorItem')} />
        <Button title="Vault Door v2" onPress={() => navigation.navigate('VaultDoorv2Item')} />
        <Button title="Vault Door v3" onPress={() => navigation.navigate('VaultDoorv3Item')} />
        <Button title="Wood Door" onPress={() => navigation.navigate('WoodDoorItem')} />
        
      </View>
    );
  }

export default DoorsScreen;