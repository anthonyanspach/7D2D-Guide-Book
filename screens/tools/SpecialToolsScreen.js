{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SpecialToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Construction Tools Screen</Text>
        <Button title="Bucket" onPress={() => navigation.navigate('BucketItem')} />
        <Button title="Paint Brush" onPress={() => navigation.navigate('PaintBrushItem')} />
        <Button title="Lockpick" onPress={() => navigation.navigate('LockpickItem')} />
        <Button title="Wire Tool" onPress={() => navigation.navigate('WireToolItem')} />
      </View>
    );
  }

export default SpecialToolsScreen;