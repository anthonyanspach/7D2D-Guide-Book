{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ContainersScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Cupboard" onPress={() => navigation.navigate('CupboardItem')} />
        <Button title="Green Drawer" onPress={() => navigation.navigate('GreenDrawerItem')} />
        <Button title="Gun Safe" onPress={() => navigation.navigate('GunSafeItem')} />
        <Button title="Mail Box" onPress={() => navigation.navigate('MailBoxItem')} />
        <Button title="Mail Drop Box" onPress={() => navigation.navigate('MailDropBox')} />
        <Button title="Microwave" onPress={() => navigation.navigate('MicrowaveItem')} />
        <Button title="Secure Storage Chest" onPress={() => navigation.navigate('SecureStorageChestItem')} />
        <Button title="Storage Box" onPress={() => navigation.navigate('StorageBoxItem')} />
        <Button title="Trash Can" onPress={() => navigation.navigate('TrashCanItem')} />
        <Button title="Wooden Chest" onPress={() => navigation.navigate('WoodenChestItem')} />
      </View>
    );
  }

export default ContainersScreen;