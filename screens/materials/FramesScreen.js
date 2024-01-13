{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FramesScreen({ navigation }) {
    return (
      <View>
        <Text>Frames</Text>
        
        <Button title="Wood Frame" onPress={() => navigation.navigate('WoodFrameItem')} />
      </View>
    );
  }

export default FramesScreen;