{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FencingScreen({ navigation }) {
    return (
      <View>
        <Text>Fencing</Text>
        
        <Button title="Wood Fence" onPress={() => navigation.navigate('WoodFenceItem')} />
      </View>
    );
  }

export default FencingScreen;