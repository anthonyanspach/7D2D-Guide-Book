{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TerrainScreen({ navigation }) {
    return (
      <View>
        <Text>Terrain</Text>
        <Button title="Asphalt" onPress={() => navigation.navigate('AsphaltItem')} />
      </View>
    );
  }

export default TerrainScreen;